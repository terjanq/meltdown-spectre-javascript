# Meltdown & Spectre JavaScript checker
This is a meltdown & spectre checker found online: https://codepen.io/internweb/full/XVZmQW/

This one didn't work for me because new Worker() refused to initialize inside the coderpen.io domain.
So I 'forked' it here. You can check if your browser is vulnerable under the following URL:

https://terjanq.github.io/meltdown-checker/


To make script working correctly using Google Chrome 63.0.3239.84 (64 bit) I had to enable SharedArrayBuffer in flags.
(chrome://flags/#shared-array-buffer -> enabled)

The script worked fine with Firefox Quantum 57.0.1 (64-bit), but used more memory.


