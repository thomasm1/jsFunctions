// coinTrackers table
// coin-tracker function
console.log('...Loading function');

exports.handler = async (event, context) => {
    //console.log('Received event: ', JSON.stringify(event, null, 2));
    event.Records.forEach((record) => {
        console.log(record.eventId);
        console.log(record.eventName);
        console.log('DynamoDB Record: %j', record.dynamodb); 
    });
    return `Successfully processed ${event.Records.length} records. `;
}