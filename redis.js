const Redis=require('ioredis');

const redis = new Redis({
    host: 'redis-10297.c14.us-east-1-3.ec2.cloud.redislabs.com',
    port: 10297,
    password:'qWotsd1x3MOXgrEZfoJheZAjZABfHb9u'
  });

  redis.set('myKey', 'myValue', (err, result) => {
    if (err) {
      console.error('Error setting value:', err);
    } else {
      console.log('Value set successfully:', result);
    }
  });

  redis.get('myKey', (err, result) => {
    if (err) {
      console.error('Error getting value:', err);
    } else {
      console.log('Retrieved value:', result);
    }
  });
  
  