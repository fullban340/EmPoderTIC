import { Component, ViewChild, OnInit} from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';


@Component({
  selector: 'app-reconocimiento',
  templateUrl: './reconocimiento.page.html',
  styleUrls: ['./reconocimiento.page.scss'],
})

export class ReconocimientoPage implements OnInit {
  @ViewChild(IonModal) modal!: IonModal;


  fileUrl: string = 'https://go.microsoft.com/fwlink/?linkid=2239168';

  // Obtén una referencia al elemento <a> oculto utilizando ViewChild
  @ViewChild('downloadLink', { static: false }) downloadLink: any;
  

  downloadFile() {
    // Activa el enlace oculto para iniciar la descarga
    this.downloadLink.nativeElement.click();}

  message = '';
  name!: string;

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }

  selectedMedal: any; // Variable para mantener la medalla seleccionada
  selectedMedal2: any; // Variable para mantener la medalla seleccionada en el Área 2


  medals = [
    {
      title: 'Insignia de Colaboración',
      image: '../../assets/icon/Insignia1.png',
      description: 'Una insignia otorgada por tu excepcional colaboración en nuestra comunidad.',
      modal: 'Participar activamente en almenos 1 taller o evento de liderazgo',
    },
    {
      title: 'Insignia de Inspiración',
      image: '../../assets/icon/Insignia2.png',
      description: 'Una insignia que reconoce tu capacidad de inspirar a otros en nuestra comunidad.',
      modal: 'Asistir y participar activamente en al menos 2 tallereso eventos de liderazgo'
    },
    {
      title: 'Insignia Bloqueada',
      image: '../../assets/icon/Insignia3.png',
      description: 'Esta medalla está bloqueada. ¡Desbloquéalo para obtener la medalla!',
      modal: 'Participar activamente enal menos 3 talleres o eventos de liderazgo femenino',
      certificado: 'Obtener Certificado.'
    },
  ];
  medals2 = [
    {
      title2: 'Insignia de Base de Datos',
      image2: '../../assets/icon/Insignia.png',
      description2: 'Una insignia otorgada por tu excepcional.',
      modal2: 'AAAAAAAAAAAA'
    },
    {
      title2: 'Insignia de Arquitectura',
      image2: '../../assets/icon/Insignia.png',
      description2: 'Una insignia que reconoce tu.',
      modal2: 'EEEEEEEEEEEEEEEEE'
    },
    {
      title2: 'Insignia Bloqueada',
      image2: '../../assets/icon/Insignia.png',
      description2: 'Esta medalla está bloqueada. ¡Desbloquéalo para obtener la medalla!',
      modal2: 'IIIIIIIIIIIIIIIIII'
    },
  ];
  ultimoCardBloqueado: boolean = true;
  isAlertOpen = false;
  public alertButtons = ['OK'];

  setOpen(isOpen: boolean){
    this.isAlertOpen = isOpen;
  }
  constructor() {
    console.log('Valor de ultimoCardBloqueado:', this.ultimoCardBloqueado);
   }

   selectMedal(medal: any) {
    this.selectedMedal = medal;
  }

  selectMedal2(medal: any) {
    this.selectedMedal2 = medal;
  }

  ngOnInit() {
  }
}
