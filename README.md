# Statsd Docker image 

## Description

Statsd is a network daemon that runs on the Node.js platform and listens for
statistics, like counters and timers, sent over UDP or TCP and sends aggregates
to one or more pluggable backend services (e.g., Graphite).

This image allows you to run statsd in a Docker container.


## How to run it

Available environment variables:

* STATSD_GRAPHITEHOST graphite
* STATSD_GRAPHITEPORT 2003
* STATSD_PORT 8125
* STATSD_BACKENDS [\"./backends/graphite\"]
* STATSD_FLUSHINTERVAL 10000

