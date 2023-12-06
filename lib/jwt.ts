import jwt, { JwtPayload } from 'jsonwebtoken';

interface SignTokenOptions {
  exp?: number;
  iat?: number;
  [key: string]: any;
}

const signToken = (
  obj: SignTokenOptions,
  expiresIn: string | number = '30d',
): string => {
  if (obj?.exp) {
    delete obj.exp;
  }

  if (obj?.iat) {
    delete obj.iat;
  }

  if (expiresIn === 'never') {
    return jwt.sign(obj, process.env.JWT_SECRET!);
  } else {
    return jwt.sign(obj, process.env.JWT_SECRET!, {
      expiresIn,
    });
  }
};

const verifyToken = (token: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.JWT_SECRET!, (err, decoded) => {
      if (err) {
        resolve({
          error: err,
        });
      } else {
        resolve({
          success: true,
          obj: decoded as JwtPayload,
          token: token,
        });
      }
    });
  });
};

const decodeToken = (token: string): JwtPayload | null =>
  jwt.decode(token) as JwtPayload | null;

export { signToken, verifyToken, decodeToken };
