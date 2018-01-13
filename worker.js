
/*
* worker.js - Spectre Check
*
* Copyright 2018 Tencent Xuanwu Lab <xlab@tencent.com>
* Copyright 2018 Tencent, Inc. and/or its affiliates. All rights reserved.
*
* This code is the copyright of all authors, please reference reservation reproduced.
*/

self.addEventListener('message', function (event)
{
    const sharedBuffer = event.data;
    const sharedArray = new Uint32Array(sharedBuffer);
    postMessage('start');
    while(true)
        Atomics.add(sharedArray,0,1);
});