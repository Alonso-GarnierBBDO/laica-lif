var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var provincia;
var canton;
var distrito;
var idProvincia;
var idCanton;
var form = function () {
    var formElements = document.querySelectorAll('.wpcf7-form.init');
    if (formElements) {
        formElements.forEach(function (element) { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                inicializarElementos(element, 'provincia');
                inicializarElementos(element, 'canton');
                inicializarElementos(element, 'distrito');
                inicializador(element, 'provincia');
                return [2 /*return*/];
            });
        }); });
    }
};
function inicializador(element, type, id) {
    var selectItem = element.querySelector("select[name=\"".concat(type, "\"]"));
    if (selectItem) {
        if (id) {
            setType(selectItem, type, element, id);
        }
        else {
            setType(selectItem, type, element, null);
        }
        selectItem.onchange = function () {
            var value = selectItem.value;
            var claveEncontrada;
            if (type == 'provincia') {
                claveEncontrada = getKeyByValue(provincia, value);
                idProvincia = claveEncontrada;
                inicializador(element, 'canton', claveEncontrada);
            }
            else if (type == 'canton') {
                claveEncontrada = getKeyByValue(canton, value);
                idCanton = claveEncontrada;
                inicializador(element, 'distrito', claveEncontrada);
            }
        };
    }
}
function setType(element, type, father, id) {
    return __awaiter(this, void 0, void 0, function () {
        var url, response, pagina, loadinOption, defaultOption, data, key, value, newOption;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = '';
                    pagina = 'https://ubicaciones.paginasweb.cr/';
                    if (!element) return [3 /*break*/, 4];
                    element.innerHTML = '';
                    if (type == 'provincia') {
                        url = 'provincias.json';
                    }
                    else if (type == 'canton' && id) {
                        url = "provincia/".concat(id, "/cantones.json");
                        inicializarElementos(father, 'distrito');
                    }
                    else if (type == 'distrito' && idCanton && idProvincia) {
                        url = "provincia/".concat(idProvincia, "/canton/").concat(idCanton, "/distritos.json");
                    }
                    loadinOption = document.createElement('option');
                    loadinOption.innerText = 'Cargando...';
                    loadinOption.value = ''; // Asignar la clave como valor de opción
                    element === null || element === void 0 ? void 0 : element.appendChild(loadinOption);
                    return [4 /*yield*/, fetch("".concat(pagina).concat(url))];
                case 1:
                    // Esperamos que el fetch cargue
                    response = _a.sent();
                    element.innerHTML = '';
                    defaultOption = document.createElement('option');
                    if (type == "canton") {
                        defaultOption.innerText = 'Cantón';
                    }
                    else {
                        defaultOption.innerText = type;
                    }
                    defaultOption.value = ''; // Asignar la clave como valor de opción
                    element === null || element === void 0 ? void 0 : element.appendChild(defaultOption);
                    if (!response.ok) return [3 /*break*/, 3];
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    if (type == 'provincia') {
                        provincia = data;
                    }
                    else if (type == 'canton') {
                        canton = data;
                    }
                    for (key in data) {
                        if (data.hasOwnProperty(key)) {
                            value = data[key];
                            newOption = document.createElement('option');
                            newOption.innerText = value;
                            newOption.value = value; // Asignar la clave como valor de opción
                            // Agregar la nueva opción al select
                            element === null || element === void 0 ? void 0 : element.appendChild(newOption);
                        }
                    }
                    return [3 /*break*/, 4];
                case 3:
                    console.error('Error al obtener los datos');
                    _a.label = 4;
                case 4: return [2 /*return*/];
            }
        });
    });
}
function inicializarElementos(element, type) {
    var selectItem = element.querySelector("select[name=\"".concat(type, "\"]"));
    if (selectItem) {
        selectItem.innerHTML = '';
        var defaultOption = document.createElement('option');
        if (type == 'canton') {
            defaultOption.innerText = 'Cantón';
        }
        else {
            defaultOption.innerText = type;
        }
        defaultOption.value = ''; // Asignar la clave como valor de opción
        selectItem.appendChild(defaultOption);
    }
}
function getKeyByValue(object, value) {
    return Object.keys(object).find(function (key) { return object[key] === value; });
}
export default form;
