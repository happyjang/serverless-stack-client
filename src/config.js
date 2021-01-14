const config = {
    s3: {
      REGION: "us-east-1",
      BUCKET: "jang-note-app-upload",
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "YOUR_API_GATEWAY_URLhttps://mx30x0kh96.execute-api.us-east-1.amazonaws.com/prod"
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_gEhsqDqnU",
      APP_CLIENT_ID: "53k1fd79gh7l6ur2ru2jv8gru8",
      IDENTITY_POOL_ID: "us-east-1:bc17e1e6-2322-4881-8907-d399be9a11ec",
    },
  };
  
  export default config;