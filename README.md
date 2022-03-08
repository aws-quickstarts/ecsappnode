# ecsappnode

This project creates:
- ECS App using NodeJS;

## Local deploy

```
- npm start
```

- http://localhost:3070/healthcheck
- http://localhost:3070/customers

## Docker deploy

```
- docker build -t ecsappnode
- docker images
- docker run -d -p 3070:3070 --name ecsappnode ecsappnode
```

## Push images to ECR repository

Credentials configurations
```
- aws configure
```

Login
```
- aws ecr get-login-password --region us-east-2 | docker login --username AWS --password-stdin aws_account_id.dkr.ecr.us-east-2.amazonaws.com 
```

List docker images
```
- docker images
```

Tag docker image
```
- docker tag [image_id] aws_account_id.dkr.ecr.region.amazonaws.com/my-repository:tag
```

Push docker image to ECR repository
```
- docker push aws_account_id.dkr.ecr.region.amazonaws.com/my-repository:tag
```
