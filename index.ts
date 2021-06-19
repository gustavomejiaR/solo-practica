class Departamento{
  departamento: string;
   constructor(departamento: string){
       this.departamento = departamento; 

   }
getName(){
   return this.departamento;
}    

}

class Piso{
  nombre: string;
  departamentos: Departamento[] = [];
  constructor(nombre: string){
      this.nombre = nombre;

  }
pushDepartamento(departamento: Departamento){
  return this.departamentos.push(departamento);
}
getDepartamentos(): Departamento[] {
  return this.departamentos;
}

}

class Edificio{
  piso: Piso[]
   constructor(piso: Piso[]){
       this.piso = piso;

   }
addDepartamentoToPiso(nombreDepiso: string, departamento: Departamento){
   const pisoEncontrado = this.piso.find(p=>p.nombre == nombreDepiso);
   return pisoEncontrado.pushDepartamento(departamento);


}    
getDepartamentosByPiso(nombreDePiso: string){
  const pisoEncontrado = this.piso.find(p=>p.nombre == nombreDePiso);
  return pisoEncontrado.getDepartamentos()
}

}


function testClaseEdificio() {
  const unPiso = new Piso("planta baja");
  const otroPiso = new Piso("primer piso");
  const unEdificio = new Edificio([unPiso, otroPiso]);
  const deptoUno = new Departamento("depto uno");
  const deptoDos = new Departamento("depto dos");
  const deptoTres = new Departamento("depto tres");
  unEdificio.addDepartamentoToPiso("planta baja", deptoUno);
  unEdificio.addDepartamentoToPiso("planta baja", deptoDos);
  unEdificio.addDepartamentoToPiso("planta baja", deptoTres);

  const deptos = unEdificio.getDepartamentosByPiso("planta baja");
  const deptosEmpty = unEdificio.getDepartamentosByPiso("primer piso");

  if (
    Array.isArray(deptosEmpty) &&
    deptosEmpty.length == 0 &&
    deptos.length == 3 &&
    deptos[2].getName() == "depto tres"
  ) {
    console.log("testClaseBandaApartment passed");
  } else {
    throw "testClaseBandaApartment not passed";
  }
}

function main() {
  testClaseEdificio();
  console.log("repo de clases con clases")
  console.log("otro cambio insertado")
}
main();
