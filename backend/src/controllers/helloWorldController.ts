import { Request, Response } from 'express'

class HelloWorldController {
  
  public async index(request: Request,response: Response) {
    return response.status(200).json({message: 'Hello World'})
  }
}

export default new HelloWorldController()