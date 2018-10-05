$(document).ready(function () {
    const vowels = [
        { tl: 'அ', fr: 'a' },
        { tl: 'ஆ', fr: 'aa' },
        { tl: 'இ', fr: 'i' },
        { tl: 'ஈ', fr: 'ii' },
        { tl: 'உ', fr: 'u' },
        { tl: 'ஊ', fr: 'uu' },
        { tl: 'எ', fr: 'e' },
        { tl: 'ஏ', fr: 'ee' },
        { tl: 'ஐ', fr: 'ai' },
        { tl: 'ஒ', fr: 'o' },
        { tl: 'ஓ', fr: 'oa' },
        { tl: 'ஔ', fr: 'au' }
    ];

    let random = Math.floor(Math.random() * vowels.length);

    function getVowels(vowels, random) {

        let vowel = vowels[random];
        let score = 0;
        let counter = 0;
    
        $('button').click(function (e) {
            let input = $('input').val();
            input = input.toLowerCase();
            e.preventDefault();
            if (input === vowel.fr) {
                $('.message').removeClass('text-danger');
                $('.message').addClass('text-success');
                $('.message').text('Bonne réponse !');
                score += 1;
            } else {
                $('.message').toggleClass('text-success');
                $('.message').toggleClass('text-danger');
                $('.message').text('Mauvaise réponse 😔 ' + vowel.tl + ' : ' + vowel.fr);
            }
            $('input').val('');
            counter += 1;
            random = Math.floor(Math.random() * vowels.length);
            vowel = vowels[random];
            $('#wrapper #tl-letter').text(vowel.tl);
            $('#wrapper #score').text(score + '/' + counter);
        });



    }
    $('#wrapper #tl-letter').text(vowels[random].tl);
    getVowels(vowels, random);
    /*
        let random = Math.floor(Math.random() * vowels.length);   
        $('#wrapper span').text(vowels[random].tl);
    
        $('button').click(function(e){
            let input = $('input').val();
            e.preventDefault();
            if(input ===)
        });*/


});