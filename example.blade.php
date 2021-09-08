  <div id="candidatar_vaga_form" class="form-candidato">
      <!-- abre ao clicar no Candidatar-me à vaga -->
      <span>Vaga selecionada:</span>
      <span class="vaga-selecionada"></span>

      {!! Form::open(['id' => 'form_candidatar_vaga', 'enctype' => 'multipart/form-data', 'method' => 'post', 'files' => true]) !!}

      {{-- <input type="hidden" name="_token" id="token1" value="{{ csrf_token() }}"> --}}
      <input type="text" placeholder="Seu nome completo" name="nome" id="nome1">
      <input type="email" placeholder="E-mail para contato" name="email" id="emai11">
      <input type="text" placeholder="Telefone para contato" name="telefone" id="telefone1" class="fone">
      <input type="hidden" name="cidade" id="cidade1" value="-">
      <!-- inserir máscara para telefone -->
      <textarea name="mensagem" id="mensagem1" placeholder="Mensagem" rows="3"></textarea>

      <div class="upload">
          <div class='input-wrapper'>
              <label id="label1" for='input-file1'>
                  Selecionar Currículo em PDF, DOC, ODT ou DOCX com até 2MB
              </label>
              <input name="arquivo" id='input-file1' accept='.doc,.docx,.pdf,.odt' type='file' value="Save" />
              <span id='file-name1'></span>
          </div>
      </div>
      <button id="candidatar-vaga" class="send">Enviar currículo</button>
      {!! Form::close() !!}
  </div>
