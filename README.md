# Parallax
This application is intended for learning purposes. Specifically learning the topics of general full-stack application development, Quantitative Finance, Machine Learning, and low-latency programming.

# Version Control
JS      -   vES2025
Node    -   v22.13.1
C++     -   v23
gcc     -   v16.0.0
clang   -   v16.0.0
MongoDB -   v8.0    (Community)
Nginx   -   v1.27.3

# Run
npm install $(cat dependencies.yaml | grep ': "' | cut -d ':' -f1)
