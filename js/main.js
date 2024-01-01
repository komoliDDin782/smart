// get the selected language from the dropdown
document.getElementById('langSelect').addEventListener('change', function() {
  var lang = this.value;

  // change the text based on the selected language
  if (lang === 'en') {
   document.getElementById('k1').innerText = 'English with Lingua prospect';
	   document.getElementById('k2').innerText = 'MOVE FORWARD';
	   document.getElementById('k3').innerText = 'You live a new life for every new language you speak';
	   document.getElementById('k4').innerText = ' If you know only one language, you live only once.';
	  
	  
	   document.getElementById('k5').innerText = '  ';
	   document.getElementById('k6').innerText = ' ';
	   document.getElementById('k7').innerText = 'Sirojiddin Akhmedov';
	   document.getElementById('k8').innerText = '- Graduated with a bachelors degree from the Samarkand Institute of Foreign Languages';
	   document.getElementById('k9').innerText = '- Ielts 7.5';
	   document.getElementById('k10').innerText = '- Working as teachers for more than 4 years';
	   document.getElementById('k11').innerText = 'English for adults with different levels of experience';
	   document.getElementById('k12').innerText = 'Effective programs for those who need to quickly learn a foreign language or improve their language level. We look forward to seeing you in our classes.';
	   document.getElementById('k13').innerText = 'English for high school students (from 12 years old)';
	   document.getElementById('k14').innerText = 'High academic performance, excellent results in exams, admission to the best universities in Uzbekistan and abroad.';
	   document.getElementById('k15').innerText = '- English language school for people from 12 to 60 years old.';
	   document.getElementById('k16').innerText = '- You can undergo training from scratch using a modern program or improve your level.';
	   document.getElementById('k17').innerText = '- You can choose the option that is convenient for you and study in groups or individually.';
	   document.getElementById('k18').innerText = ' - The cost of group classes is from 200,000 sum.';
	   document.getElementById('k19').innerText = 'Address: Alisher Navoi Avenue, next to AL-Hilol ';
	  
  } 
	else if (lang === 'uz') {
   document.getElementById('k1').innerText = 'Ingliz tili Lingua prospect bilan ';
	   document.getElementById('k2').innerText = 'MOVE FORWARD';
	   document.getElementById('k3').innerText = 'You live a new life for every new language you speak';
	   document.getElementById('k4').innerText = ' If you know only one language, you live only once.';
	  
	  
	   document.getElementById('k5').innerText = 'Har bir yangi til bilan siz yangi hayot kechirasiz.';
	   document.getElementById('k6').innerText = 'Agar siz faqat bitta tilni bilsangiz, faqat bir marta yashaysiz.';
	   document.getElementById('k7').innerText = 'Sirojiddin Akhmedov';
	   document.getElementById('k8').innerText = '– Samarqand chet tillar institutining bakalavriatini tamomlagan';
	   document.getElementById('k9').innerText = '- Ielts 7.5';
	   document.getElementById('k10').innerText = "- 4 yildan ortiq o'qituvchi bo'lib ishlagan";
	   document.getElementById('k11').innerText = 'Turli darajadagi tajribaga ega kattalar uchun ingliz tili  ';
	   document.getElementById('k12').innerText = "Chet tilini tezda o'rganish yoki til darajasini oshirish kerak bo'lganlar uchun samarali dasturlar.Sizni darslarimizda kutib qolamiz.";
	   document.getElementById('k13').innerText = "O'rta maktab o'quvchilari uchun ingliz tili (12 yoshdan)";
	   document.getElementById('k14').innerText = "Oliy akademik ko‘rsatkichlar, imtihonlarda a’lo natijalar, O‘zbekiston va xorijdagi eng yaxshi universitetlarga kirish.";
	   document.getElementById('k15').innerText = "- 12 yoshdan 60 yoshgacha bo'lganlar uchun ingliz tili o'quv markazi. ";
	   document.getElementById('k16').innerText = "- Siz o'zingiz uchun qulay variantni tanlab, guruh yoki yakka tartibda o'rganishingiz mumkin. ";
	   document.getElementById('k17').innerText = ' - Siz ozingiz uchun qulay variantni tanlab, guruh yoki yakka tartibda organishingiz mumkin. ';
	   document.getElementById('k18').innerText = "- Guruh darslari narxi 200 000 so'mdan. ";
	   document.getElementById('k19').innerText = 'Адрес: Просп.Алишера Навои,AL-Hilol yonida joylashgan';
	   
  } else if (lang === 'ru') {
       document.getElementById('k1').innerText = 'Английский язык с Lingua prospect';
	   document.getElementById('k2').innerText = 'MOVE FORWARD';
	   document.getElementById('k3').innerText = 'You live a new life for every new language you speak';
	   document.getElementById('k4').innerText = ' If you know only one language, you live only once.';
	  
	  
	   document.getElementById('k5').innerText = 'С каждым новым языком вы проживаете новую жизнь';
	   document.getElementById('k6').innerText = 'Если вы знаете только один язык, вы живёте всего один раз.';
	   document.getElementById('k7').innerText = 'Сирожиддин Ахмедов';
	   document.getElementById('k8').innerText = '- Закончил бакалавр в Самаркандском институте Иностранных языков';
	   document.getElementById('k9').innerText = '- Ielts 7.5';
	   document.getElementById('k10').innerText = '- Работает учителям больше чем 4 года';
	   document.getElementById('k11').innerText = 'Английский для взрослых с разным уровнем подготовки ';
	   document.getElementById('k12').innerText = 'Эффективные программы для тех кому надо быстро освоить иностранный язык или повысить язоковой уровень.Ждем вас на занятиях.';
	   document.getElementById('k13').innerText = 'английский для старшеклассников (от 12 лет)';
	   document.getElementById('k14').innerText = 'Высокая успеваемость,отличные ресультаты на эгзаменах поступление в лучшие ВУЗы в Узбекистане и за рубежом.';
	   document.getElementById('k15').innerText = '- Школа английского языка для людей от 12 до 60 лет.';
	   document.getElementById('k16').innerText = '- Вы можете пройти обучение «с нуля» по современной программе или повысить свой уровень.';
	   document.getElementById('k17').innerText = '- Вы можете выбрать удобный для вас вариант и заниматься в группах или индивидуально. ';
	   document.getElementById('k18').innerText = ' - Стоимость групповых занятий — от 200,000 сум.  ';
	   document.getElementById('k19').innerText = 'Адрес: Просп.Алишера Навои,рядом с AL-Hilol ';
	   
  }
});

/
