
<?php




?>

<form class="form_contact" method="POST" action="">
    <div class="two">
        <input type="text" name="name" placeholder="Nombre">
        <input type="text" name="lastName" placeholder="Apellido">
    </div>
    <input type="email" name="email" placeholder="Correo electrónico">
    <div class="two_big">
        <input type="number" name="phone" placeholder="Teléfono">
        <input type="number" name="edad" placeholder="Edad">
    </div>
    <div class="three">
        <select name="provincia" id="">
            <option value="">Provincia</option>
        </select>
        <select name="canton" id="">
            <option value="">Cantón</option>
        </select>
        <select name="distrito" id="">
            <option value="">Distrito</option>
        </select>
    </div>

    <div class="content">
        <textarea name="message" id="" cols="30" rows="10"></textarea>
        <button type="submit">Enviar</button>
    </div>


</form>