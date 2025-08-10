# Parallax
This application is intended for learning purposes. Specifically learning the topics of general full-stack application development, Quantitative Finance, Machine Learning, and low-latency programming.

# Tech Stack
* JS            -   vES2025
* Node          -   v22.13.1
* C++           -   v23
* gcc           -   v16.0.0
* clang         -   v16.0.0
* PostgreSQL    -   v16.3
* TimescaleDB   -   v2.17.2
* Nginx         -   v1.27.3
  
# Run
```
npm install $(cat dependencies.yaml | grep ': "' | cut -d ':' -f1)
```