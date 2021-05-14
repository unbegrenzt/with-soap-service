export default function handler(req, res) {
  let result = { 
    message: "Welcome to my nextjs api" 
  };
  res.status(200).json(result);
}
