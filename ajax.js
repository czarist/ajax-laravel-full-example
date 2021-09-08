document.addEventListener(
  "DOMContentLoaded",
  function () {
    $.ajaxSetup({
      headers: {
        "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
      },
    });
    const host = window.location.protocol + "//" + window.location.host;

    // primeiro form

    $("#input-file1").on("change", function () {
      var fn = document.getElementById("file-name1");
      var label1 = document.getElementById("label1");
      fn.innerHTML = $("#input-file1").val();
      label1.innerHTML = "Arquivo Inserido";
      label1.style.backgroundColor = "#8ba000";
    });

    $("#form_candidatar_vaga").on("submit", function (e) {
      e.preventDefault();
      var input = document.getElementById("input-file1");
      var arquivo = input.files[0];
      var nome = $("#form_candidatar_vaga").find("input[name=nome]").val();
      var email = $("#form_candidatar_vaga").find("input[name=email]").val();
      var telefone = $("#form_candidatar_vaga")
        .find("input[name=telefone]")
        .val();
      var cidade = $("#form_candidatar_vaga").find("input[name=cidade]").val();
      var mensagem = $("#form_candidatar_vaga")
        .find("textarea[name=mensagem]")
        .val();

      var myformData = new FormData();
      myformData.append("nome", nome);
      myformData.append("email", email);
      myformData.append("telefone", telefone);
      myformData.append("cidade", cidade);
      myformData.append("mensagem", mensagem);
      myformData.append("arquivo", arquivo);

      $.ajax({
        method: "post",
        processData: false,
        contentType: false,
        cache: false,
        url: host + "/vagas/curriculo",
        enctype: "multipart/form-data",
        data: myformData,
        success: function (status) {
          alert(status.mensagem);
          window.location.reload();
        },
        error: function (request, status, error) {
          console.log(request.responseText);
          alert("erro ao enviar, por favor tente mais tarde");
          window.location.reload();
        },
      });
    });
  },
  false
);

// fim primeiro form
