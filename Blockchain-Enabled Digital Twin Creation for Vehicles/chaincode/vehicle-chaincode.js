async storeTelemetry(ctx, telemetryJSON) {
    const telemetry = JSON.parse(telemetryJSON);
    const key = ctx.stub.createCompositeKey('telemetry', 
        [telemetry.vin, telemetry.timestamp]);
    
    await ctx.stub.putState(key, Buffer.from(telemetryJSON));
    ctx.stub.setEvent('TelemetryStored', Buffer.from(telemetryJSON));
    
    return JSON.stringify({ success: true, key });
}

async getLatestTelemetry(ctx, vin) {
    const iterator = await ctx.stub.getStateByPartialCompositeKey(
        'telemetry', [vin]
    );

    let latest = null;
    let result = await iterator.next();

    while (!result.done) {
        const t = JSON.parse(result.value.value.toString());
        if (!latest || t.timestamp > latest.timestamp) {
            latest = t;
        }
        result = await iterator.next();
    }

    await iterator.close();
    return JSON.stringify(latest || {});
}

async getTelemetryHistory(ctx, vin, limitStr = '100') {
    const limit = parseInt(limitStr);
    const iterator = await ctx.stub.getStateByPartialCompositeKey(
        'telemetry', [vin]
    );

    const history = [];
    let result = await iterator.next();

    while (!result.done && history.length < limit) {
        history.push(JSON.parse(result.value.value.toString()));
        result = await iterator.next();
    }

    await iterator.close();
    return JSON.stringify(history);
}

async getAllTelemetry(ctx) {
    const iterator = await ctx.stub.getStateByPartialCompositeKey(
        'telemetry', []
    );

    const all = [];
    let result = await iterator.next();

    while (!result.done) {
        all.push(JSON.parse(result.value.value.toString()));
        result = await iterator.next();
    }

    await iterator.close();
    return JSON.stringify(all);
}
