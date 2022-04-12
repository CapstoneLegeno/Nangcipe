document.querySelector('.ajaxsend').addEventListener('click', () => {
    var id = document.forms[0].elements[0].value;
    var password = document.forms[0].elements[1].value;
    var name = document.forms[0].elements[2].value;
    var inputData = {
        'id': id,
        'password': password,
        'name': name
    };
    ajax_send("http://localhost:3000/users/createUser", inputData);

    function ajax_send(url, inputData) {
        var data = JSON.stringfy(inputData);
        var xhr = new XMLHttpsRequest();
        xhr.open('POST', url);
        xhr.setRequestHeader('content-type', 'application/json');
        xhr.send(data);
        xhr.addEventListener('load', () => {
            const result = JSON.parse(xhr.responseText);
            if (result.result === 'fail') {
                document.querySelector('.result').innerHTML = "동일한 사용자가 이미 존재합니다.";
            } else {
                document.querySelector('.result').innerHRML = '회원가입 성공';
            }
        });
    }
});