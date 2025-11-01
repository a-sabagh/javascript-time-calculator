# JavaScript Calculator

A simple web-based time calculator built with JavaScript, HTML, and CSS.

![Screenshot](./screenshot.png)

## 🐳 Run with Docker

1. Run application using docker compose

```bash
docker compose up -d
```

2. Open [http://localhost:8080](http://localhost:8080) in your browser.

## 📦 Build Image and Run Container

1. Build the Docker image:
   
   ```bash
   docker image build -t js-time-calculator .
   ```

2. Run the container:
   
   ```bash
   docker container run -d --name js-time-cal -p 8080:80 js-time-calculator
   ```

3. Open [http://localhost:8080](http://localhost:8080) in your browser.
