var selectSpisok = 0;
	function raschitat() {
		//$('.req').css({'border':'1px solid red'}); 
		var form = document.calc;
		
		var result=0;
		var result2=0;
		var material=0;
		var selectVar = form.material.value;
		var x1 = document.getElementById("ploschad").value;
		//alert(selectVar);
		
			
			//var selectVar = value;
			selectSpisok = 2;
			selectVarArray = selectVar.split(',')
			//var selectVar = value;
			selectSpisok = 2;
			selectVarArray = selectVar.split(',');		
			//alert(selectVarArray);
			if (x1<51) {material=selectVarArray[4]};
			if (x1>50 && x1<101) {material=selectVarArray[3]};
			if (x1>100 && x1<199) {material=selectVarArray[2]};
			if (x1>200) {material=selectVarArray[1]};
			if (x1<=10) {if(selectVarArray[5]){material=selectVarArray[5]} else {material=selectVarArray[4]}};
			//alert('материал'+material);
			material=material*x1;
			//alert(material);
		var x2 =form.perimetr.value; //0;
		var xugli = form.ugly.value;
		if (xugli<5) {ugli=0};
		if (xugli>4) {ugli=xugli-4};
		var x3 = ugli
		var x4 = form.truby.value;
		var x5 = form.lustra.value;
		var x6 = 0;//form.kruk.value;
		var x7 = form.tochechniyFirmy.value;
		var x8 = 0;//form.tochechniySvoy.value;
		var x9 = 0;//form.pozharnaya.value;		
		
		var y1 = 1;   // Площадь
		var y2 = 200; // Периметр
		var y3 = 150; // Количество углов
		var y4 = 150; // Трубы
		var y5 = 400; // Люстра потолочная
		var y6 = 200; // Крюк люстры
		var y7 = 450; // Точечный свет фирмы
		var y8 = 400; // Свой точечный свет 
		var y9 = 400; // Пожарная сигнализация
		
		var znach = [x1, x2, x3, x4, x5, x6, x7, x9];
		var koef = [y1, y2, y3, y4, y5, y6, y7, y9];
			/*	$('.out').empty();
				$('.out').append('<div style="color:red;">0 Площадь '+znach[0]+'</div>')
				$('.out').append('<div>Материал '+material+'</div>')*/
			for (var i=1; i < 8; i++) {
				if(isNaN(parseFloat(znach[i]))){
					znach[i] = 0;
				}
				//alert(i);
				//$('.out').append('<div style="color:green;">'+znach[i]+''+koef[i]+'</div>');
				result = parseFloat(znach[i])*parseFloat(koef[i])+result;
				
				/*if (i==1) {$('.out').append('<div>'+i+' Периметр '+znach[i]+'*'+koef[i]+'='+znach[i]*koef[i]+'</div>')}
				if (i==2) {$('.out').append('<div>'+i+' Количество углов '+znach[i]+'*'+koef[i]+'='+znach[i]*koef[i]+'</div>')}
				if (i==3) {$('.out').append('<div>'+i+' Трубы '+znach[i]+'*'+koef[i]+'='+znach[i]*koef[i]+'</div>')}
				if (i==4) {$('.out').append('<div>'+i+' Люстра потолочная '+znach[i]+'*'+koef[i]+'='+znach[i]*koef[i]+'</div>')}
				if (i==5) {$('.out').append('<div>'+i+' Крюк люстры '+znach[i]+'*'+koef[i]+'='+znach[i]*koef[i]+'</div>')}
				if (i==6) {$('.out').append('<div>'+i+' Точечный свет фирмы '+znach[i]+'*'+koef[i]+'='+znach[i]*koef[i]+'</div>')}
				if (i==7) {$('.out').append('<div>'+i+' Свой точечный свет '+znach[i]+'*'+koef[i]+'='+znach[i]*koef[i]+'</div>')}
				if (i==8) {$('.out').append('<div>'+i+' Пожарная сигнализация '+znach[i]+'*'+koef[i]+'='+znach[i]*koef[i]+'</div>')}*/
			}
			result=parseFloat(result)+parseFloat(material);
			//alert(result);
			console.log(result);
			if(isNaN(result)){
				if (selectVar == "0,0,0,0,0" || x1 == 0 || x2 == 0)  {
						$('.req').css({'border':'1px solid #f00'});
						document.getElementById('summa').innerHTML = '';
						alert('Заполните обязательные поля');			
					}
				else {
					alert('Некорректо заполнены поля');
				}
			}
			else{
				if(result>=7500){
					document.getElementById('textsto').innerHTML = "СТОИМОСТЬ ВАШЕГО ПОТОЛКА, ОТ:";
					document.getElementById('summa').innerHTML = result;
					document.getElementById('minsumm').innerHTML = '&nbsp;';
					if (selectVar == "0,0,0,0,0" || x1 == 0 || x2 == 0)  {
						$('.req').css({'border':'1px solid #f00'});
						document.getElementById('summa').innerHTML = '';
						alert('Заполните обязательные поля');			
					}
					else{
						$('.req').css({'border':'1px solid #ccc'});
					}
				}
				else{
					document.getElementById('textsto').innerHTML = "СТОИМОСТЬ ВАШЕГО ПОТОЛКА:";
					document.getElementById('summa').innerHTML = '7500';
					document.getElementById('minsumm').innerHTML = '<span style="font-size:small;">*минимальная сумма заказа 7500сом</span>';
					if (selectVar == "0,0,0,0,0" || x1 == 0 || y2 == 0)  {
						$('.req').css({'border':'1px solid #f00'});
						document.getElementById('summa').innerHTML = '';
						alert('Заполните обязательные поля');			
					}
					else{
						$('.req').css({'border':'1px solid #ccc'});
					}
				}
			}
	}	