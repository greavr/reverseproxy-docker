
# Build all containers:

docker build -t nginx-reverseproxy nginx/
docker build -t nodejs-container Nodejs/
docker build -t python-container Python/

## Or you can run:
docker-compose build 

# Run environment:

docker-compose up -d

# Stop environment

docker-composer down


# How to test each environment:
docker run -p 8080:8080 -d nodejs-container

docker run -p 5000:5000 -d python-container
