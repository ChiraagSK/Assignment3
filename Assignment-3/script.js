    function AmbigousCase(){
        const Angle_a = parseFloat(document.getElementById("angle-a").value);
        const a = parseFloat(document.getElementById("amb-side-a").value);
        const b = parseFloat(document.getElementById("amb-side-b").value);
        const result = document.getElementById("triangle-type");

        console.log("Angle A:", Angle_a, "Side a:", a, "Side b:", b);
        
        if(isNaN(Angle_a)||isNaN(a)||isNaN(b)){
            result.value="Please enter a valid number for all fields";
            return;
        }

        const angleARad = (Angle_a * Math.PI) / 180;
        const h = b * Math.sin(angleARad);


        if (a < h) {
            result.value = "No Triangle";
        } else if (a === h) {
            result.value = "One Triangle (Right Triangle)";
        } else if (a >= b) {
            result.value = "One Triangle (a >= b)";
        } else {
            const angleB1 = Math.asin((a * Math.sin(angleARad)) / b) * (180 / Math.PI);
            const angleB2 = 180 - angleB1;
    
            result.value = `Two Triangles: Solution 1 - Angle B = ${angleB1.toFixed(2)}°, Solution 2 - Angle B = ${angleB2.toFixed(2)}°`;
        }
    }

    function HeronFormula(){
        const sideA = parseFloat(document.getElementById("side-a").value);
        const sideB = parseFloat(document.getElementById("side-b").value);
        const sideC = parseFloat(document.getElementById("side-c").value);
        const result = document.getElementById("heron-result");

        if(isNaN(sideA)||isNaN(sideB)||isNaN(sideC)){
            result.value="Please enter a valid number for all fields";
            return;
        }

        const area = (1 / 4) * Math.sqrt(4 * Math.pow(sideA, 2) * Math.pow(sideB, 2) - Math.pow((Math.pow(sideA, 2) + Math.pow(sideB, 2) - Math.pow(sideC, 2)), 2));
        result.value = `Area: ${area.toFixed(2)}`;
    }

    function PolynomialFunction(){
        const coeff = document.getElementById("coefficients").value.split(" ").map(Number);
        const exp = document.getElementById("exponents").value.split(" ").map(Number);
        const xVal = parseFloat(document.getElementById("x-value").value);
        const polyFunction = document.getElementById("poly-function-result");
        const polySolution = document.getElementById("poly-eval-result");

        // if(coeff.some(isNaN) || exp.some(isNaN) || isNaN(xVal) || coeff.length !== exp.length){
        //     polyFunction.value="Please enter a valid number for all fields";
        //     return;
        // }

        let functionString = "f(x) = ";
        let evaluation = 0;
        

        for(let i = 0; i < coeff.length; i++){
            const coefficient = coeff[i];
            const exponent = exp[i];
            const term = coefficient*Math.pow(xVal, exponent);

            evaluation += term;

            //+ive or -ive
            if(i>0){
                functionString += coefficient >= 0 ? " + " : " - ";
            } else if(coefficient < 0){
                functionString += "-";
            }

            functionString += `${Math.abs(coefficient)}x^${exponent}`;
        }

        polyFunction.value = functionString;
        polySolution.value = `f(${xVal}) = ${evaluation.toFixed(2)}`;
    }

    function NewtonsMethod(){
        const rootGuess = parseFloat(document.getElementById("root-guess").value);
        const resultField = document.getElementById("newton-result");

        function f(x) {
            return 6 * Math.pow(x, 4) - 13 * Math.pow(x, 3) - 18 * Math.pow(x, 2) + 7 * x + 6;
        }
    
        function fPrime(x) { //Derivative
            return 24 * Math.pow(x, 3) - 39 * Math.pow(x, 2) - 36 * x + 7;
        }

        let x0 = rootGuess;
        const maxIterations = 100;
        const tolerance = 1e-7;
        let iteration = 0;

        while(iteration < maxIterations){
            const fx0 = f(x0);
            const fpx0 = fPrime(x0);
            
            if(fpx0 === 0){
                resultField.value = "Please enter a different initial guess";
                return;
            }

            const x1 = x0 - fx0/fpx0;

            if(Math.abs(x1-x0) < tolerance){
                resultField.value = `Approximate root: ${x1.toFixed(6)}`;
                return;
            }

            x0 = x1;
            iteration++;
        }
        resultField.value = "The method did not converge.";
    }

    

    