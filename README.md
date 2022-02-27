# Architecture



# Push images to ECR repository

## Credentials configurations

aws configure

## List docker images

docker images

## Tag docker image

docker tag [image_id] aws_account_id.dkr.ecr.region.amazonaws.com/my-repository:tag

## Push docker image to ECR repository

docker push aws_account_id.dkr.ecr.region.amazonaws.com/my-repository:tag