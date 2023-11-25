
# E-Commerce Web Application

The Website is Deployed on [Vercel](https://vercel.com/).
<br />

**[Deployed Link.](https://vercel-web-ai-shop-app.vercel.app/)** 

## Overview 

The server component of the e-commerce web application is designed to handle API requests for product displays, shopping cart management, and AI-enhanced functionalities using [OpenAi API](https://openai.com/blog/openai-api). It's built using [Node.js](https://nodejs.org/en) and [Express](https://expressjs.com/) for a simplified yet powerful RESTful API. On the other hand, front-end part of this project uses [React.js](https://react.dev/).


### Get the Code

- Clone Repo

```bash
mkdir vercel-web-ai-shop-app
cd vercel-web-ai-shop-app
git clone https://github.com/LordWhiskas/Vercel-Web-AI-Shop-App.git
```


- Install Dependencies

```bash
npm install
```

- Run Server (Client)
```bash
cd client
npm run start
```

[Client Documentation](https://github.com/LordWhiskas/Vercel-Web-AI-Shop-App/tree/main/client)

- Run Server (API)
```bash
cd api
npm run dev
```
[API Documentation](https://github.com/LordWhiskas/Vercel-Web-AI-Shop-App/blob/main/api)

## :exclamation: Configuration [vercel.json](https://github.com/LordWhiskas/Vercel-Web-AI-Shop-App/blob/main/vercel.json) file
  
### Build Command

- `cd client && npm install && npm run build`: Navigates to the `client` directory, installs dependencies, and builds the front-end application. We should change it because our directory and commands are not default in client part.

### Output Directory

- `client/build`: Designates the directory where the static assets generated by the build are located.

### Rewrites
>
> - Used to define routing rules for incoming requests.
>
> ##### API Routes
>
> - `source: "/api/(.*)"`: All requests to paths starting with `/api/` are directed to the `index.js` file within the `/api` directory.
> - `destination: "/api/index.js"`: The single entry point for handling API requests.
>
> ##### SPA Routes
>
> - `source: "/(.*)"`: All other requests are rewritten to the root path.
> - `destination: "/"`: Serves the `index.html` of the SPA, allowing client-side routing to handle the request.

## Implementing Last-Minute Feature Changes

Change management practices involve a systematic approach when introducing new features, especially last-minute ones:

1. **Assess the Impact**: Analyze the new feature's impact on the current system.
2. **Update the Project Plan**: Incorporate the new feature into the project's roadmap and documentation.
3. **Communicate with Stakeholders**: Inform all affected parties about the change.
4. **Branching Strategy**: Use version control to manage feature development in isolation.
5. **Testing**: Implement comprehensive testing for the new feature.
6. **Peer Review**: Conduct code reviews to maintain quality.
7. **Continuous Integration**: Integrate the feature into the main branch regularly.
8. **Rollback Plan**: Have a strategy in place for reverting changes if necessary.
9. **Deployment**: Deploy the new feature carefully and monitor its performance.
10. **Monitor and Adjust**: Be prepared to address any issues that arise post-deployment.

Visit [localhost:3000](http://localhost:3000) for Client. <br/>
Visit [localhost:8000](http://localhost:8000) for Backend.
