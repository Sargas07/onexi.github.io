function linearRegression(x,y){
	var sumX   = 0;
	var sumY   = 0;
	var sumXY  = 0;
	var sumXX  = 0;
	var sumYY  = 0;
	var n = x.length;
	
	for (var i=0; i < n; i++) {		
		sumX+= x[i];
		sumY += y[i];
		sumXY += (x[i]*y[i]);
		sumXX += (x[i]*x[i]);
		sumYY += (y[i]*y[i]);
	} 
	
	// slope m = (sumXY - sumX*sumY/n) / (sumXX^2 - sumX^2/n)
	var slope = (n * sumXY - sumX * sumY) / (n * sumXX - sumX * sumX);

	// intercept b = (sumY - slope*sumX)/n 
	var intercept = (sumY - slope * sumX)/n;

	// create the regression equation line 
	// y = mx + b  in statistics written as y^= b0 + b1x
	var fn = function (x) { return slope * x + intercept;};
	return fn;
}

function run(){

	var y = [1, 2, 3, 4];
	var x = [5.2, 5.7, 5.0, 4.2];

	var lr = linearRregression(x, y);
}