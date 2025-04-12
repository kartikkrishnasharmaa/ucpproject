import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export async function generateToken(user) {
  return jwt.sign(
    {
      id: user._id,
      email: user.email,
      role: user.role,
    },
    JWT_SECRET,
    { expiresIn: '1d' }
  );
}

export async function verifyToken(token) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    return null;
  }
}

export async function requireAuth(req, role = null) {
  const token = req.headers.authorization?.split(' ')[1];
  
  if (!token) {
    throw new Error('Authentication required');
  }

  const decoded = await verifyToken(token);
  
  if (!decoded) {
    throw new Error('Invalid token');
  }

  const user = await User.findById(decoded.id);
  
  if (!user) {
    throw new Error('User not found');
  }

  if (role && user.role !== role) {
    throw new Error(`Unauthorized: ${role} role required`);
  }

  return user;
}

export async function signOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('role');
    localStorage.removeItem('name');
  }
  
  export async function requireAuth(requiredRole = null) {
    const token = localStorage.getItem('token');
    
    if (!token) {
      throw new Error('Authentication required');
    }
  
    try {
      const res = await fetch('/api/auth/verify', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
  
      const data = await res.json();
  
      if (!res.ok) {
        throw new Error(data.error || 'Invalid token');
      }
  
      if (requiredRole && data.role !== requiredRole) {
        throw new Error(`Unauthorized: ${requiredRole} role required`);
      }
  
      return data;
    } catch (error) {
      await signOut();
      throw error;
    }
  }