
$(function(){

	var numberMemory = 0;
	var numberText = 0;
	var numberCount = 0;
	var operator = '@';
	var currentText = '';

	function isZero(){
		if (currentText=='0') {
			currentText = '';
		};
	}

	function render(){
		$('#message').text(currentText);
		$('#operator').text(operator);
	}

	function operatorRender(){
		$('#operator').text(operator);
	}

	function enterNumber(number){
		isZero();
		currentText += number;
		render();
	}

	function enterOperator(operatorLast){
		if (operator == '@') {
			numberMemory = parseInt(currentText);
			operator = operatorLast;
			render();
			currentText = '';
		}
		else if (currentText == '') {
			operator = operatorLast;
			operatorRender();
		}
		else {
			calculateAnswer(operatorLast);
		};
	}

	function calculateAnswer(operatorLast){
		switch (operator) {
		case '+':
			numberMemory += parseInt(currentText);
			break; 
		case '-':
			numberMemory -= parseInt(currentText);
			break;
		case '*':
			numberMemory *= parseInt(currentText);
			break;
		case '/':
			numberMemory /= parseInt(currentText);
			break;
		}
		currentText = numberMemory;
		operator = operatorLast;
		render();
		currentText = '';
	}

	
	$(b0).on('click', function(){	enterNumber(0);	});
	$(b1).on('click', function(){	enterNumber(1);	});
	$(b2).on('click', function(){	enterNumber(2);	});
	$(b3).on('click', function(){	enterNumber(3);	});
	$(b4).on('click', function(){	enterNumber(4); });
	$(b5).on('click', function(){	enterNumber(5);	});
	$(b6).on('click', function(){	enterNumber(6);	});
	$(b7).on('click', function(){	enterNumber(7);	});
	$(b8).on('click', function(){	enterNumber(8);	});
	$(b9).on('click', function(){	enterNumber(9);	});

	$(bplus).on('click', function(){ enterOperator('+'); });
	$(bmin).on('click', function(){ enterOperator('-');	});
	$(btim).on('click', function(){ enterOperator('*'); });
	$(bdiv).on('click', function(){ enterOperator('/'); });

	
	
	$(bequ).on('click', function(){
		if (operator == '@') {

		}
		
		else {
			calculateAnswer('=');
			numberMemory = 0;
			operator = '@';
			currentText = '0';
		}
	});







	$(bclear).on('click', function(){
		numberMemory = 0;
		operator = '@';
		currentText = '0';
		render();
	});

} );
