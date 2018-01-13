# Meltdown-JavaScript
This is a meltdown-checker found online: https://codepen.io/internweb/full/XVZmQW/

This one didn't work for me because new Worker() refused to initialize inside the coderpen.io domain.
So I 'forked' it here. You can check if your browser is vulnerable here.


https://terjanq.github.io/meltdown-checker/


To script work correctly with Google Chrome 63.0.3239.84 (64 bit) I had to enable SharedArrayBuffer. 
(chrome://flags/#shared-array-buffer -> enabled)

The script worked fine with Firefox Quantum 57.0.1 (64-bit), but used more memory.
