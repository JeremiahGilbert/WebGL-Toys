function main() {
	const canvas = document.querySelector("#glCanvas") as HTMLCanvasElement;
	const gl = canvas.getContext("webgl2");

	if (gl === null) {
		alert("WebGL 2.0 is not supported on this device.");
		return;
	}

	gl.clearColor(0.5, 0.5, 0.5, 1.0);
	gl.clear(gl.COLOR_BUFFER_BIT);
}

window.onload = main;
