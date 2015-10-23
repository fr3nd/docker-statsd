(function() {
    return {
        graphitePort: parseInt(process.env.STATSD_GRAPHITEPORT),
        graphiteHost: process.env.STATSD_GRAPHITEHOST,
        port: parseInt(process.env.STATSD_PORT),
        flushInterval: parseInt(process.env.STATSD_FLUSHINTERVAL),
        backends: JSON.parse(process.env.STATSD_BACKENDS)
    };
})();
