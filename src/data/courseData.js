export const courseData = [
  // --- MÓDULO 1: ONBOARDING ---
  {
    id: 1,
    title: "Módulo 01 - Onboarding",
    label: "Módulo 1",
    subModules: [
      {
        id: 1,
        label: "Sub-Módulo 1",
        title: "Onboarding Medcof",
        imageUrl: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Onboarding: Nossa História e Método", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1PrcFCOdFZI1Q3wTzfxmZV0KfIsiKAOit/view?usp=sharing" },
          { id: 2, title: "Onboarding: Apresentação da Plataforma Medcof Plus", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1rm_Vp2V7-ySock9ES7M9kRnXKa1niVIV/view?usp=sharing" },
          { id: 3, title: "Onboarding: Apresentação QBank", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1mC5OEeUus_nxys6ZNTArrLT_eOrHL9PF/view?usp=sharing" },
          { id: 4, title: "Onboarding - Apresentação R+", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1X8Wo1olvYvfUitS3RuH4gmsJZgYglxVV/view?usp=sharing" }
        ],
        materials: []
      }
    ]
  },

  // --- MÓDULO 2: NEUROLOGIA ---
  {
    id: 2,
    title: "Módulo 02 - Neurologia",
    label: "Módulo 2",
    subModules: [
      {
        id: 1,
        label: "Sub-Módulo 1",
        title: "Acidente Vascular Cerebral Isquêmico (AVCi)",
        imageUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Acidente Vascular Cerebral Isquêmico (AVCi)", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1srq0TKeTaaKlG7n6l8MYSwociwRTUeTJ/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Acidente Vascular Cerebral Isquêmico (AVCi)", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1n-fkO9xemv-tmDVMu1GqZPNQfGeB31n/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Acidente Vascular Cerebral Isquêmico (AVCi)", pdfLink: "https://drive.google.com/file/d/1pa7yH7D_9169I-pFU1jw22OHnXJaBg92/view?usp=sharing" },
          { title: "PDF de Slides - Acidente Vascular Cerebral Isquêmico (AVCi)", pdfLink: "https://drive.google.com/file/d/1OsHlUtRRwXeOqIVlfLmTtZtR30md8va6/view?usp=sharing" }
        ]
      },
      {
        id: 2,
        label: "Sub-Módulo 2",
        title: "AVCi Tratamento e Complicações",
        imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - AVCi: Tratamento e Complicações", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1eQUR9CipzkxrXddeHGUDAYKNAW2yIr6n/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - AVCi: Tratamento e Complicações", pdfLink: "https://drive.google.com/file/d/17yRvggzxzIZiMWPffGEXJEU0WDltEfW9/view?usp=sharing" },
          { title: "PDF de Slides - AVCi: Tratamento e Complicações", pdfLink: "https://drive.google.com/file/d/1CGCVi1IU--axsI216yc0PHtXsd0PHU2-/view?usp=sharing" }
        ]
      },
      {
        id: 3,
        label: "Sub-Módulo 3",
        title: "AIT",
        imageUrl: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: AIT", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1RnEoqpeg3GiwYIQMTKus7oIZcVXY8gyW/view?usp=sharing" },
          { id: 2, title: "Aula 02 - AIT", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1zThAs5Hfvqe1v5jAhVgrhkmASihLy5Bx/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - AIT", pdfLink: "https://drive.google.com/file/d/1kxAj-cxHCTcTe6ZhYAHdbQRLx_6XsKEh/view?usp=sharing" },
          { title: "PDF de Slides - AIT", pdfLink: "https://drive.google.com/file/d/1mOXg5fJH2X-SFk9jhgFgzE5ngaKwoPLK/view?usp=sharing" }
        ]
      },
      {
        id: 4,
        label: "Sub-Módulo 4",
        title: "Hemorragia Subaracnóidea (HSA)",
        imageUrl: "https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Hemorragia Subaracnóidea (HSA)", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1F04jy18Rj1y85_6GBxzjiZ7Ipggvq3ra/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Hemorragia Subaracnóidea (HSA)", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1LlLaMf9PYosx5_evc-Z-kjFdJjCuwCs9/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Hemorragia Subaracnóidea (HSA)", pdfLink: "https://drive.google.com/file/d/1BiQ74eJb4E0-sjFu49C6qnyn37jwdHao/view?usp=sharing" },
          { title: "PDF de Slides - Hemorragia Subaracnóidea (HSA)", pdfLink: "https://drive.google.com/file/d/10mUmf5JDbfRO8RtBkBR6FA7szAJjOmyC/view?usp=sharing" }
        ]
      },
      {
        id: 5,
        label: "Sub-Módulo 5",
        title: "AVCh Intraparenquimatoso",
        imageUrl: "https://images.unsplash.com/photo-1583912267550-d44d991b9847?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: AVCh Intraparenquimatoso", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1bRpKniT9rYSCvDH6cNKKgWFlZUjKoTs8/view?usp=sharing" },
          { id: 2, title: "Aula 02 - AVCh Intraparenquimatoso", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1hnMrbanXIVtfe-tOgBeGyH1vXsWPLqhl/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - AVCh Intraparenquimatoso", pdfLink: "https://drive.google.com/file/d/1xMhTsCI3XQ7ZMVsf0uEKDtEiiXO-Dbgj/view?usp=sharing" },
          { title: "PDF de Slides - AVCh Intraparenquimatoso", pdfLink: "https://drive.google.com/file/d/1S3FgiPVknpnfIOx59eWBzpxbAzhjn2qM/view?usp=sharing" }
        ]
      },
      {
        id: 6,
        label: "Sub-Módulo 6",
        title: "Meningites e Encefalites",
        imageUrl: "https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Meningites e Encefalites", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1oaoTVQCQJVNHk4b8SSDDlJTqFe8iWizL/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Meningites e Encefalites", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1M6quZ55FdOZKybrQxal69AMF_oze06Hf/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Meningites & Encefalites", pdfLink: "https://drive.google.com/file/d/1IBaSuMd-qRyggS75GZ2UVBmKJWb9yq6k/view?usp=sharing" },
          { title: "PDF de Slides - Meningites & Encefalites", pdfLink: "https://drive.google.com/file/d/11XR8tl2pa6WjFP0WVJns5d_eVS3-aBfH/view?usp=sharing" }
        ]
      },
      {
        id: 7,
        label: "Sub-Módulo 7",
        title: "Síndrome de Guillain-Barré (SGB)",
        imageUrl: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Síndrome de Guillain-Barré (SGB)", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1L1pOA6z-JA6yVXiqSUka8Jlszm3vyM1o/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Síndrome de Guillain-Barré (SGB)", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1oCa6GM6qN2PwFO1vLh3F0JJvNWWDok5F/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Síndrome de Guillain-Barré (SGB)", pdfLink: "https://drive.google.com/file/d/1unXJTBv9CO6NBXQ0tf7t0MjDOxkyamhT/view?usp=sharing" },
          { title: "PDF de Slides - Síndrome de Guillain-Barré (SGB)", pdfLink: "https://drive.google.com/file/d/12bQRGHa4EKwAXR1hs1p_sXC1HuEAUfrp/view?usp=sharing" }
        ]
      },
      {
        id: 8,
        label: "Sub-Módulo 8",
        title: "Miastenia Gravis",
        imageUrl: "https://images.unsplash.com/photo-1559757175-7b249a56012e?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Miastenia Gravis", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1myWpr3vsZEhg97NcYc1_T9cSDCC65P8Z/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Miastenia Gravis", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1r5IjMW4hBXF3MPDTxGAeXti7iVRZvL5B/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Miastenia Gravis", pdfLink: "https://drive.google.com/file/d/1ecOkfC9pOMY8lMhQCYTSA82TBdYoJVHa/view?usp=sharing" },
          { title: "PDF de Slides - Miastenia Gravis", pdfLink: "https://drive.google.com/file/d/1rNUNbotDyut9G4OVRtSSAsN31MnQcpWL/view?usp=sharing" }
        ]
      },
      {
        id: 9,
        label: "Sub-Módulo 9",
        title: "Introdução às Cefaleias Primárias",
        imageUrl: "https://images.unsplash.com/photo-1616012480717-fd9867059ca0?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Introdução às Cefaleias Primárias", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1g7tjrI0xB4GblyK7X0NUZVinZb3J2YL_/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Introdução às Cefaleias Primárias", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1XEz9UTijwpCLAMcs94iW1VZf-Cam9teu/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Introdução às Cefaleias Primárias", pdfLink: "https://drive.google.com/file/d/18iDFjMUf_Z5ec8UHyCRaHS66OyXNNYmz/view?usp=sharing" },
          { title: "PDF de Slides - Introdução às Cefaleias Primárias", pdfLink: "https://drive.google.com/file/d/1k09OB4PFDMAmnCR5C3nHMmgOqutGH2mm/view?usp=sharing" }
        ]
      },
      {
        id: 10,
        label: "Sub-Módulo 10",
        title: "Enxaqueca (Migrânea)",
        imageUrl: "https://images.unsplash.com/photo-1544118849-c53bd9d00377?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Enxaqueca (Migrânea)", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1VJ9g9G4o3raUd8ownRC69eShXkNlmCLZ/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Enxaqueca (Migrânea)", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1UwPP3jcRyQULzHLZeT8de7Smi-KybY4l/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Enxaqueca (Migrânea)", pdfLink: "https://drive.google.com/file/d/1utDj-zhANmGWfg1sCDx_OqXbuUsg6zxl/view?usp=sharing" },
          { title: "PDF de Slides - Enxaqueca (Migrânea)", pdfLink: "https://drive.google.com/file/d/1QN-CaqV1OYkGj_7D5edX742cT9O6_h12/view?usp=sharing" }
        ]
      },
      {
        id: 11,
        label: "Sub-Módulo 11",
        title: "Cefaleias Trigêmino-Autonômicas",
        imageUrl: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Cefaleias Trigêmino-Autonômicas", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1svrw5iRdxePCqp_oXzQEjDSE8sPlm-5e/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Cefaleias Trigêmino-Autonômicas", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1xqhjxIz57O1D7UCrI6dnC722MrVH8mRA/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Cefaleias Trigêmino-Autonômicas", pdfLink: "https://drive.google.com/file/d/1yBNi1OlHTYpNY1HyiW4G-xatVeqRLyT9/view?usp=sharing" },
          { title: "PDF de Slides - Cefaleias Trigêmino-Autonômicas", pdfLink: "https://drive.google.com/file/d/18tlhL3igxOOF9z-eiN1MD-JgP_US6uUl/view?usp=sharing" }
        ]
      },
      {
        id: 12,
        label: "Sub-Módulo 12",
        title: "Doença de Parkinson",
        imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Doença de Parkinson", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1kaqYBBxZFmBMHEfGuMOtI4y0atGKqFzj/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Doença de Parkinson", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1tEQwlXy0xwfBirC9t-ICWVz8S1sO1a9U/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Doenca de Parkinson", pdfLink: "https://drive.google.com/file/d/1dAEvQaHSqPYQ54YrcM2GRUIDakqxQmJQ/view?usp=sharing" },
          { title: "PDF de Slides - Doenca de Parkinson", pdfLink: "https://drive.google.com/file/d/1BzqUSqgwncaGkZcK_2ZGgp8pGuj5yiWv/view?usp=sharing" }
        ]
      },
      {
        id: 13,
        label: "Sub-Módulo 13",
        title: "Esclerose Múltipla (EM)",
        imageUrl: "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Esclerose Múltipla (EM)", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1jH0Z-UOOmf0EB6yAqTQQ6yZSrn_udgol/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Esclerose Múltipla (EM)", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1GNUA10jHAO6SjB6mnxIsaK0_OYl6dGtZ/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Esclerose Múltipla (EM)", pdfLink: "https://drive.google.com/file/d/1mfl19cL4gzplo2GCRndHocZ4rKWCf41q/view?usp=sharing" },
          { title: "PDF de Slides - Esclerose Múltipla (EM)", pdfLink: "https://drive.google.com/file/d/1AhBsTufeArh5PJNnhNeLpKtbl7-XW5L5/view?usp=sharing" }
        ]
      },
      {
        id: 14,
        label: "Sub-Módulo 14",
        title: "Epilepsia",
        imageUrl: "https://images.unsplash.com/photo-1617135092914-72c082b26002?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Epilepsia", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1woue-kN8pismiIRrjKLihHLvcwRK_ITK/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Epilepsia", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1nTg1RUx8JZ_R-sd4OV9wJj6q2qEvBxgI/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Epilepsia", pdfLink: "https://drive.google.com/file/d/1t2k4SQ8Go2qu-Um3O9pyz0QA1zV-9svd/view?usp=sharing" },
          { title: "PDF de Slides - Epilepsia", pdfLink: "https://drive.google.com/file/d/1pRyo6nsOM2-mnt1-ebYFgEdV0ZNrB5yi/view?usp=sharing" }
        ]
      }
    ]
  },

  // --- MÓDULO 3: IMUNOLOGIA ---
  {
    id: 3,
    title: "Módulo 03 - Imunologia",
    label: "Módulo 3",
    subModules: [
      {
        id: 1,
        label: "Sub-Módulo 1",
        title: "Alergia I: Rinite e Angioedema",
        imageUrl: "https://images.unsplash.com/photo-1584362917165-52e812f8dc08?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Alergia I", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1uBS9iwtOwcwy0q3Irriz-rC6jomXvSSx/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Alergia I: Rinite e Angioedema", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/12Eoslnr5c46pj83oxc_zCxC8eVCD7muF/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Alergia I", pdfLink: "https://drive.google.com/file/d/1eRzDAk-5bczO3NWI8ztNxhVIq8aExhcR/view?usp=sharing" },
          { title: "Errata - Alergia I", pdfLink: "https://drive.google.com/file/d/1qZ4K6jaUiXiV7LIJkT467hssmpsjbp0J/view?usp=sharing" },
          { title: "PDF de Slides - Alergia I", pdfLink: "https://drive.google.com/file/d/1oKGoPswLXJcGMGT2eSG_OdxvlxMErWRO/view?usp=sharing" }
        ]
      },
      {
        id: 2,
        label: "Sub-Módulo 2",
        title: "Alergia II: Reações de Hipersensibilidade",
        imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Alergia II", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1YEiDIHnCvyAO99rXvmLYNBwuv-SnJtpW/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Alergia II: Reações de Hipersensibilidade", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1cE-3OkLr3wYNjEeDM5Wu5K7th_gQ5IyS/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Alergia II", pdfLink: "https://drive.google.com/file/d/1_dWH7nlEjEHYAfzob0RnrNxaPU0HScLe/view?usp=sharing" },
          { title: "PDF de Slides - Alergia II", pdfLink: "https://drive.google.com/file/d/1ht34gXL02Hz_WZrtFD68o2ZnvwSMFh8f/view?usp=sharing" }
        ]
      }
    ]
  },

  // --- MÓDULO 4: EMERGÊNCIAS ---
  {
    id: 4,
    title: "Módulo 04 - Emergências",
    label: "Módulo 4",
    subModules: [
      {
        id: 1,
        label: "Sub-Módulo 1",
        title: "Emergências Hipertensivas",
        imageUrl: "https://images.unsplash.com/photo-1576091160550-2187d80a16f7?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Emergências Hipertensivas", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1nmxImSj-SwS4m5JzDSJU8rmxsbR5XBim/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Emergências Hipertensivas", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1GNzmUY-NblZTPg3WvN6Bd_0lpYNz5nuc/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Emergências Hipertensivas", pdfLink: "https://drive.google.com/file/d/1y7KvcStK8hFLmL_qgX1YXv0TrX9mHBhT/view?usp=sharing" },
          { title: "PDF de Slides - Emergências Hipertensivas", pdfLink: "https://drive.google.com/file/d/1wZ6a0bhm3N8WrFmMrExU9soEb9ptUsII/view?usp=sharing" }
        ]
      },
      {
        id: 2,
        label: "Sub-Módulo 2",
        title: "BLS e ACLS",
        imageUrl: "https://images.unsplash.com/photo-1516574187841-693018954312?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: BLS e ACLS", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1fhsMPFIYMRkKlCldkh19hlB0SlkILJVq/view?usp=sharing" },
          { id: 2, title: "Aula 02 - BLS e ACLS", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1EScWCug7KfM3FNqHIghpCMyWinvk070K/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - BLS e ACLS", pdfLink: "https://drive.google.com/file/d/14CzovFrZ24f-kfaaPsi6TX1DNEh8ZHw5/view?usp=sharing" },
          { title: "PDF de Slides - BLS e ACLS", pdfLink: "https://drive.google.com/file/d/1AosoCr7yQ8tktOo0179nsIZVRFJ8ud5K/view?usp=sharing" }
        ]
      },
      {
        id: 3,
        label: "Sub-Módulo 3",
        title: "Choque: Abordagem Inicial",
        imageUrl: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Choque - Abordagem Inicial", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/149u1xCe_tP0s3z9TYzOXIKeUNWh-LBB5/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Choque: Abordagem Inicial", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1ESG0r9lkIq3562n8mxnO3_zO-0sQl3iE/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Choque: Abordagem Inicial", pdfLink: "https://drive.google.com/file/d/1XLUpDHqC-FFrtxF91qpaPgZbbPk5fVka/view?usp=sharing" },
          { title: "PDF de Slides - Choque: Abordagem Inicial", pdfLink: "https://drive.google.com/file/d/1EWYRWn7_6vaDjM4_QZErSpagS5LOes8M/view?usp=sharing" }
        ]
      },
      {
        id: 4,
        label: "Sub-Módulo 4",
        title: "Choque: Tipos de Choque",
        imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Choque - Tipos de Choque", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1S5DSpuDzW3xceQAe0J3CuDLMvQfj8XqE/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Choque: Tipos de Choque", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1NaoTk4NDA5nYzP7LwFzJxkLY4qO_maFF/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Choque: Tipos de Choque", pdfLink: "https://drive.google.com/file/d/1Pcc_jZUOob3dwIrFN0toQtOOBk0QbcHh/view?usp=sharing" },
          { title: "PDF de Slides - Choque: Tipos de Choque", pdfLink: "https://drive.google.com/file/d/1M3LppYMS4PtKuaHud70hj6niKZDVWxLk/view?usp=sharing" }
        ]
      },
      {
        id: 5,
        label: "Sub-Módulo 5",
        title: "Intoxicações Exógenas",
        imageUrl: "https://images.unsplash.com/photo-1628771065518-0d82f1938462?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Intoxicações Exógenas", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1BK7mlqPQxfmbSjxuk2u6-o64C2Z-PjY4/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Intoxicações Exógenas", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1A6jcn-HJPILWmGQfRfvQIQNG65qqtslf/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Intoxicações Exógenas", pdfLink: "https://drive.google.com/file/d/1vm-X8thIRwXCiJrdz0yjZMNb0CBsYbcT/view?usp=sharing" },
          { title: "PDF de Slides - Intoxicações Exógenas", pdfLink: "https://drive.google.com/file/d/1HlRpXreIKYRjiOOkZ9lK2E4Jv1CDRar2/view?usp=sharing" }
        ]
      },
      {
        id: 6,
        label: "Sub-Módulo 6",
        title: "Emergências Hiperglicêmicas (CAD e EHH)",
        imageUrl: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Emergências Hiperglicêmicas (CAD e EHH)", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1ds2o95hR7TS40Hi2qIN0Bxti8MNouFaC/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Emergências Hiperglicêmicas (CAD e EHH)", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1DusGdDNXsyVz8HXd575t2IcWm9O1H93u/view?usp=sharing" }
        ],
        materials: [
          { title: "Errata - Emergências Hiperglicêmicas", pdfLink: "https://drive.google.com/file/d/10CEeZe1Xa6duYhq1Ry7ZkETtRsjtVwK2/view?usp=sharing" },
          { title: "Ficha Resumo - Emergências Hiperglicêmicas", pdfLink: "https://drive.google.com/file/d/1BjTPW9lntamHTDVBPojxB-bemKPVOY7W/view?usp=sharing" },
          { title: "PDF de Slides - Emergências Hiperglicêmicas", pdfLink: "https://drive.google.com/file/d/1lSfJwNq3IVKgFKmQE1Qf3v30oUKzgX6w/view?usp=sharing" }
        ]
      },
      {
        id: 7,
        label: "Sub-Módulo 7",
        title: "Diagnóstico de Morte Encefálica (ME)",
        imageUrl: "https://images.unsplash.com/photo-1559757175-0b299a9d829c?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Diagnóstico de Morte Encefálica (ME)", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1JPObNyHMdrC04HvijLBk3_qWajNHkyUf/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Diagnóstico de Morte Encefálica (ME)", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1rZNQGCDvGdgjZW55oRFkW31EDcNtEbCX/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Diagnóstico de Morte Encefálica (ME)", pdfLink: "https://drive.google.com/file/d/1CdsiPf_GivduhX46rdfM8aQYEoK-phm5/view?usp=sharing" },
          { title: "PDF de Slide - Diagnóstico de Morte Encefálica (ME)", pdfLink: "https://drive.google.com/file/d/1Bod6r3v3tN9prg4VKvdvFn2Jg4g6aEeI/view?usp=sharing" }
        ]
      },
      {
        id: 8,
        label: "Sub-Módulo 8",
        title: "Via Aérea, Intubação e VNI",
        imageUrl: "https://images.unsplash.com/photo-1632053001888-293d0f411516?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Via Aérea, Intubação e VNI", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1gDhhTaq_HelvqSPhT9p64A_qhH7R3jQe/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Via Aérea, Intubação e VNI", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1j7cYKeZFuwdOpB8nTLotVguxvjc-eUJu/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Via Aérea, Intubação e VNI", pdfLink: "https://drive.google.com/file/d/1UufMw_1hxNWWYtQ3DJCbBSy0qEOiDT-6/view?usp=sharing" },
          { title: "PDF de Slide - Via Aérea, Intubação e VNI", pdfLink: "https://drive.google.com/file/d/1CCx5jFUZ2TaLpz_mi98ZPbQLtlwWuePb/view?usp=sharing" }
        ]
      }
    ]
  },

  // --- MÓDULO 5: UTI ---
  {
    id: 5,
    title: "Módulo 05 - UTI",
    label: "Módulo 5",
    subModules: [
      {
        id: 1,
        label: "Sub-Módulo 1",
        title: "Princípios de Ventilação Mecânica (VM)",
        imageUrl: "https://images.unsplash.com/photo-1516574187841-693018954312?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Princípios de VM", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/19imhxRKyr_2P8nghlADwJODf1-8nuus8/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Princípios de Ventilação Mecânica", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1qRzRToI-zM60ZtK-KEmSzyKc5kxQmLIg/view?usp=sharing" }
        ],
        materials: [
          { title: "Errata - Princípios de VM", pdfLink: "https://drive.google.com/file/d/1USt-o8swYrMWiSx4AeSeJZMN98zBsuTe/view?usp=sharing" },
          { title: "Ficha Resumo - Princípios de VM", pdfLink: "https://drive.google.com/file/d/1OUSV3KSyFdWoLDwh6_2h9g5Uzp0AiJ5_/view?usp=sharing" },
          { title: "PDF da Aula - Princípios de VM", pdfLink: "https://drive.google.com/file/d/1QdXHGLLbTyJeM1WSfLCU_OE1TDoR3oYH/view?usp=sharing" }
        ]
      },
      {
        id: 2,
        label: "Sub-Módulo 2",
        title: "Ventilação Mecânica (VM): Exercícios",
        imageUrl: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Ventilação Mecânica: Exercícios", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1T4g747Dp7pq1o1WDV-cX1UsIDsiHBYLH/view?usp=sharing" }
        ],
        materials: [
          { title: "PDF da Aula - VM Exercícios", pdfLink: "https://drive.google.com/file/d/18FA8y6y28QnnHz3SDrNzHgXRy08YLiqy/view?usp=sharing" }
        ]
      },
      {
        id: 3,
        label: "Sub-Módulo 3",
        title: "Teste de Respiração Espontânea e Extubação",
        imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: TRE e Extubação", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/11pVWSKO02r4U4qY_ddKoebdu-2pu2bBN/view?usp=sharing" },
          { id: 2, title: "Aula 02 - TRE e Extubação", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1VbLv-2wEl_PwtpwqPFCP0HBEW7zRpNPC/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - TRE e Extubação", pdfLink: "https://drive.google.com/file/d/1QECIFkQDGvZPhBLaANQ3vUuOD99-60Bh/view?usp=sharing" },
          { title: "PDF da Aula - TRE e Extubação", pdfLink: "https://drive.google.com/file/d/1ucBTp87wsFBjOYA_dzARjfAw-4bRUA9Y/view?usp=sharing" }
        ]
      },
      {
        id: 4,
        label: "Sub-Módulo 4",
        title: "Pneumonia Associada à Ventilação Mecânica (PAV)",
        imageUrl: "https://images.unsplash.com/photo-1584036561566-b93a50208c3c?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: PAV", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1LKftPY4ANxG_KqpA55zO3Zq7PO1vURzo/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Pneumonia Associada à Ventilação", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/165yddoskDWLYzIgzV1Y8vNSb-3wroNQR/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - PAV", pdfLink: "https://drive.google.com/file/d/1kw6Vrgx--jHVqsLIKRVoWHmay0JEzM7A/view?usp=sharing" },
          { title: "PDF da Aula - PAV", pdfLink: "https://drive.google.com/file/d/1HeDDEzNEcXp12qfMS0etSe10mLRhgDgH/view?usp=sharing" }
        ]
      }
    ]
  },
  // --- MÓDULO 6: INFECTOLOGIA ---
  {
    id: 6,
    title: "Módulo 06 - Infectologia",
    label: "Módulo 6",
    subModules: [
      {
        id: 1,
        label: "Sub-Módulo 1",
        title: "HIV",
        imageUrl: "https://images.unsplash.com/photo-1584036561566-b93a50208c3c?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: HIV", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1_NNUs_I_NbeAEHz7XM0t1yxDnz0M79HK/view?usp=sharing" },
          { id: 2, title: "Aula 02 - HIV", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1xeCt5UiwEJwpwLlTSm9PsNk3wFRe4mc1/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - HIV", pdfLink: "https://drive.google.com/file/d/1K5h3DIUcSRxBNUnCqtEz2lG4h45g6lRD/view?usp=sharing" },
          { title: "PDF de Slides - HIV", pdfLink: "https://drive.google.com/file/d/1S4AnHkaYiQ1-ZjTGVM21A2KIR4DkW88X/view?usp=sharing" }
        ]
      },
      {
        id: 2,
        label: "Sub-Módulo 2",
        title: "Doenças Oportunistas HIV",
        imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Doenças Oportunistas - HIV", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/17wKBSzI9P6FxNbyECrRgsNS4XvdRvm2K/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Doenças Oportunistas: HIV", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1-pwWqli4Y-o_aX_Wtnw6QRs7S5X2geMd/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Doenças Oportunistas: HIV", pdfLink: "https://drive.google.com/file/d/1WPCK24_ZHHFa30Oa6slyVIeAN5nOmvw-/view?usp=sharing" },
          { title: "PDF de Slides - Doenças Oportunistas: HIV", pdfLink: "https://drive.google.com/file/d/1jIq7h2_vNYLRctKz0sxU_ZMGbjoq5JPp/view?usp=sharing" }
        ]
      },
      {
        id: 3,
        label: "Sub-Módulo 3",
        title: "Tuberculose Pulmonar",
        imageUrl: "https://images.unsplash.com/photo-1555618456-55618779435b?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Tuberculose Pulmonar", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1sFwwR1Y5S5Ck-lcwPxLxXVr7OjVzYKcY/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Tuberculose Pulmonar", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/15ZMq-5vmEL80MgS2zn0ZpCQQqzsU0kQ4/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Tuberculose Pulmonar", pdfLink: "https://drive.google.com/file/d/1dXzdBlQBZTYDLNmNDwE6CC6ABVWeg1FF/view?usp=sharing" },
          { title: "PDF de Slides - Tuberculose Pulmonar", pdfLink: "https://drive.google.com/file/d/1UW5aMMV4fbEoeUvc015msX8DVPU65SJL/view?usp=sharing" }
        ]
      },
      {
        id: 4,
        label: "Sub-Módulo 4",
        title: "Tuberculose Extra Pulmonar",
        imageUrl: "https://images.unsplash.com/photo-1555618456-55618779435b?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Tuberculose Extra Pulmonar", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1KD0dwp3AupO20wYk0TvfVmzrTlFLeGGE/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Tuberculose Extra Pulmonar", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1lYBzei8uY_Jz-rNF5Xeo9KLqFPdalLin/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Tuberculose Extra Pulmonar", pdfLink: "https://drive.google.com/file/d/1JYixfQI_HRsdHha7wM8meREOzGeAMlCC/view?usp=sharing" },
          { title: "PDF de Slides - Tuberculose Extra Pulmonar", pdfLink: "https://drive.google.com/file/d/1ZXTu-DS072g6FkW5SwsSvYApuR9ruODp/view?usp=sharing" }
        ]
      },
      {
        id: 5,
        label: "Sub-Módulo 5",
        title: "Tratamento de Tuberculose e RIPE",
        imageUrl: "https://images.unsplash.com/photo-1584362917165-52e812f8dc08?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Tratamento TB e RIPE", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1zkhF_cYr-yXuaQ-2tLnkgr1hrYDGWX2W/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Tratamento TB e RIPE", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1OCRfoCq1fT3WExN6geMUXPNC6w82Xyxg/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Tratamento TB e RIPE", pdfLink: "https://drive.google.com/file/d/1afruLai8CgaBDHlXGaJloVC8mePp3jj7/view?usp=sharing" },
          { title: "PDF de Slides - Tratamento TB e RIPE", pdfLink: "https://drive.google.com/file/d/1qjloFERWmac545XDuFtS9995FvLdUu6l/view?usp=sharing" }
        ]
      },
      {
        id: 6,
        label: "Sub-Módulo 6",
        title: "Antibióticos I",
        imageUrl: "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Antibióticos I", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1_XR8MwQqlJemqFhkpYSlL99xt1cenTE3/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Antibióticos I", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1EZMrIRmjdStFPnp_76K0vCqvBSXpKD_J/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Antibióticos I", pdfLink: "https://drive.google.com/file/d/14Ds2Q7dKJaiD9dUfTUf_5lh6ib3lRskN/view?usp=sharing" },
          { title: "PDF de Slides - Antibióticos I", pdfLink: "https://drive.google.com/file/d/1ytr0i9sh80ZsbeTCJH5hvdONrHszCNUM/view?usp=sharing" }
        ]
      },
      {
        id: 7,
        label: "Sub-Módulo 7",
        title: "Antibióticos II",
        imageUrl: "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Antibióticos II", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/10nFfiYN9aQLfPXSxTfWTPe8MuaDQhO2e/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Antibióticos II", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1W2zVS939eM7G_P-JzjM0ZgRCCw39-eNm/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Antibióticos II", pdfLink: "https://drive.google.com/file/d/1-oO5_k7wd-5F2lH_QqpN7liwG6gb_owr/view?usp=sharing" },
          { title: "PDF de Slides - Antibióticos II", pdfLink: "https://drive.google.com/file/d/19hk6vtL-lRDK6tNuxzJhRqyhYtqlIcXI/view?usp=sharing" }
        ]
      },
      {
        id: 8,
        label: "Sub-Módulo 8",
        title: "Sífilis e Uretrites Infecciosas",
        imageUrl: "https://images.unsplash.com/photo-1576671081837-49000212a370?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Sífilis e Uretrites", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1C23TAQmEkZMsQ3WHDmDbjH3ok-OEGsbg/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Sífilis e Uretrites Infecciosas", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1YQgRK-DqEC1a-RGiXx7ETh3AuOrWdLbl/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Sífilis e Uretrites", pdfLink: "https://drive.google.com/file/d/1qjGxfy-67JIal8QOojPyIF8hJluubnW8/view?usp=sharing" },
          { title: "PDF de Slides - Sífilis e Uretrites", pdfLink: "https://drive.google.com/file/d/1MEVy5PYVNyGoJSwBotmeMGNFDaM0Dfha/view?usp=sharing" }
        ]
      },
      {
        id: 9,
        label: "Sub-Módulo 9",
        title: "Neurossífilis",
        imageUrl: "https://images.unsplash.com/photo-1559757175-577952467e38?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Neurossífilis", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1UF8kgxrb6-fR8wB_NRpmLjH-v_g--J7/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Neurossífilis", pdfLink: "https://drive.google.com/file/d/1gba2RM3kXiagwJAtknOA7iw1BYl26ldD/view?usp=sharing" },
          { title: "PDF de Slides - Neurossífilis", pdfLink: "https://drive.google.com/file/d/1dlKJg8b0jfFYxsgZyTRyDvlYYOs3qoQb/view?usp=sharing" }
        ]
      },
      {
        id: 10,
        label: "Sub-Módulo 10",
        title: "Arboviroses",
        imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Arboviroses", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1yld_8u8RSaPCmQyDPFKykDfY-9L-EAGR/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Arboviroses", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1zN_aMID5VVuZZlpfEDSozieR5Ctq1kl4/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Arboviroses", pdfLink: "https://drive.google.com/file/d/1ILnhy3KU6rxVTtDqmwUzrKuvjAvMhbFV/view?usp=sharing" },
          { title: "PDF de Slides - Arboviroses", pdfLink: "https://drive.google.com/file/d/19TaORZTiGJBVn3xwdEjGItdgdpt8xj_j/view?usp=sharing" }
        ]
      },
      {
        id: 11,
        label: "Sub-Módulo 11",
        title: "Hepatites Virais",
        imageUrl: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Hepatites Virais", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1IFGBjlL-Ume35UNWTVHRIbNkOCV7T-zp/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Hepatites Virais", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/15C_hV7olaleawkMReBGTD2Tv2F8oII8p/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Hepatites Virais", pdfLink: "https://drive.google.com/file/d/1KxVDLZNfWBRNkVhDBHhzWkAXyUbcrA9K/view?usp=sharing" },
          { title: "PDF de Slides - Hepatites Virais", pdfLink: "https://drive.google.com/file/d/1e6jUF2apjGf45Cj7eEpdqY_jx4hHH8k0/view?usp=sharing" }
        ]
      },
      {
        id: 12,
        label: "Sub-Módulo 12",
        title: "Doenças Virais e Pandêmicas",
        imageUrl: "https://images.unsplash.com/photo-1584036561566-b93a50208c3c?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Doenças Virais e Pandêmicas", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1oNxAkKCfgs3yE0hzpSHLYmelpHxWoCPR/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Doenças Virais e Pandêmicas", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1hGk_5t3-QkpCIhiLKZyGgxL9LWV2ND_p/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Doenças Virais", pdfLink: "https://drive.google.com/file/d/1O96bUVhul1YPNRqz_Jon1q_Cw9fRF-6u/view?usp=sharing" },
          { title: "Ficha Resumo - Doenças Pandêmicas", pdfLink: "https://drive.google.com/file/d/1jIX-YVaeVzrFePX1_1xqAGdUMRYidYgW/view?usp=sharing" },
          { title: "PDF de Slides - Doenças Virais e Pandêmicas", pdfLink: "https://drive.google.com/file/d/1YWPHvAkZlIBCD9QDK1aSW1Rjy4db9DhV/view?usp=sharing" }
        ]
      },
      {
        id: 13,
        label: "Sub-Módulo 13",
        title: "Icterícias febris e Febre Maculosa",
        imageUrl: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Icterícias Febris e Febre Maculosa", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1qA19BDBcZmLsxY7PLCH-pow91UOai3lK/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Icterícias Febris e Febre Maculosa", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1EykllOZLkk-AcqfD-6xZMWzl6cQEIFeO/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Icterícias Febris e Febre Maculosa", pdfLink: "https://drive.google.com/file/d/1SLgUPkuw9jBkd6gXlJuqz-WjLz2VudhS/view?usp=sharing" },
          { title: "PDF de Slides - Icterícias Febris e Febre Maculosa", pdfLink: "https://drive.google.com/file/d/1JtdwNkVfZnxjCZpgti66tANcSaj34bfJ/view?usp=sharing" }
        ]
      },
      {
        id: 14,
        label: "Sub-Módulo 14",
        title: "Acidentes com Animais Peçonhentos",
        imageUrl: "https://images.unsplash.com/photo-1534533039832-68c17163f9d1?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Acidentes com Animais Peçonhentos", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1AkA83k4KISPhqnnID36fkwlkWnkkZYaH/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Acidentes com Animais Peçonhentos", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1isHSZdD-nI3j4ue-MOZHDVkl3iSt1OI8/view?usp=sharing" }
        ],
        materials: [
          { title: "Erratas - Acidentes com Animais Peçonhentos", pdfLink: "https://drive.google.com/file/d/1AS76sbrxOWPser9QlpLbbzWyzARURNPO/view?usp=sharing" },
          { title: "Ficha Resumo - Acidentes com Animais Peçonhentos", pdfLink: "https://drive.google.com/file/d/1naWZde85mRz_ji4xIEQMhbgpZwBFsel0/view?usp=sharing" },
          { title: "PDF de Slides - Acidentes com Animais Peçonhentos", pdfLink: "https://drive.google.com/file/d/1LJcCUwMaNAmBPJhypvkkSH2CwGIYIGRZ/view?usp=sharing" }
        ]
      },
      {
        id: 15,
        label: "Sub-Módulo 15",
        title: "Vacinação Situações Especiais",
        imageUrl: "https://images.unsplash.com/photo-1632053001925-83b35520c427?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Vacinação - Situações Especiais", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1akIHElZMxwKXNWByEVfM9uJA23GbW9cu/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Vacinação: Situações Especiais", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1MyX-fgprOXjBqYwiyboIuFA71aw9smwB/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Vacinação: Situações Especiais", pdfLink: "https://drive.google.com/file/d/14UKz4XOfG0Aax2L3IXL4Q1rihGibUzMS/view?usp=sharing" },
          { title: "PDF de Slides - Vacinação: Situações Especiais", pdfLink: "https://drive.google.com/file/d/1-DiWh4-OJku87EBlNB5dua-3FYRC5MsS/view?usp=sharing" }
        ]
      },
      {
        id: 16,
        label: "Sub-Módulo 16",
        title: "Doenças Negligenciadas",
        imageUrl: "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Doenças Negligenciadas", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1z2CWNQhRmX_iSKhIy9KalUFZC-1BbxwA/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Doenças Negligenciadas", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1mVEW3cbHj-IlrxzVaqUdf1KaSlyfbo5t/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Doenças Negligenciadas", pdfLink: "https://drive.google.com/file/d/1KGCFUlqx31xMFp73or3BYspGSg8rmFGh/view?usp=sharing" },
          { title: "PDF de Slides - Doenças Negligenciadas", pdfLink: "https://drive.google.com/file/d/1ZYHWGJGgM5rRiWvyTEmE0wCnQ8CO6M-8/view?usp=sharing" }
        ]
      }
    ]
  },

  // --- MÓDULO 7: CLÍNICA MÉDICA ---
  {
    id: 7,
    title: "Módulo 07 - Clínica Médica",
    label: "Módulo 7",
    subModules: [
      {
        id: 1,
        label: "Sub-Módulo 1",
        title: "Pré-Operatório I",
        imageUrl: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Pré-Operatório I", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1FgnxiQsMBJep4UNKqhEZtxikM0rEiH3L/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Pré-Operatório I", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1_X3-uPHlKnItf9jZlRIfKmmMxW5F0y7i/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Pré-Operatório I", pdfLink: "https://drive.google.com/file/d/1q7eXjPJHL4CBYmH9QJHhb9nflNG8Sa1C/view?usp=sharing" },
          { title: "PDF de Slides - Pré-Operatório I", pdfLink: "https://drive.google.com/file/d/1BnLBqovFYD1MIXGn5DqFr54vIjg2i-PN/view?usp=sharing" }
        ]
      },
      {
        id: 2,
        label: "Sub-Módulo 2",
        title: "Pré-Operatório II",
        imageUrl: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Pré-Operatório II", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1k5_PtuQ01oBQCNhfYE_6M210kZliozfW/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Pré-Operatório II", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1aV7rvrroKItEQ7bXx6CX_JG3qgS5N3T0/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Pré-Operatório II", pdfLink: "https://drive.google.com/file/d/1zcFwwtZKl6dSXIwIAF4yN1P0UQGiJVhu/view?usp=sharing" },
          { title: "PDF de Slides - Pré-Operatório II", pdfLink: "https://drive.google.com/file/d/16KWSIxDlGXqL0MNas-nbwSa54LhqvWKQ/view?usp=sharing" }
        ]
      },
      {
        id: 3,
        label: "Sub-Módulo 3",
        title: "Rastreamentos",
        imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Rastreamentos", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1mpis4dYkgtSkCQ3xUmUhRikyubZx6u1G/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Rastreamentos", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1W-j4ScmrmiLfqE863oMkCDB6spSiks8e/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Rastreamentos", pdfLink: "https://drive.google.com/file/d/1MoWmpUoLD_s-wBOx7IcYeN6bH_NNLbRV/view?usp=sharing" },
          { title: "PDF de Slides - Rastreamentos", pdfLink: "https://drive.google.com/file/d/1qGF8vC7HfN3RlM0xs6k97Shk6aCKeJlo/view?usp=sharing" }
        ]
      }
    ]
  },

  // --- MÓDULO 8: GASTROENTEROLOGIA ---
  {
    id: 8,
    title: "Módulo 08 - Gastroenterologia",
    label: "Módulo 8",
    subModules: [
      {
        id: 1,
        label: "Sub-Módulo 1",
        title: "Dispepsia",
        imageUrl: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Dispepsia", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1RN-li2nC9zuqXHaPNvkq82DU9Je9xh0Z/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Dispepsia", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/12swhNOEWtJwh8eSB522LvG7_vcB9EQK-/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Dispepsia", pdfLink: "https://drive.google.com/file/d/1jH7I_HQB0XbN4nvLjqRiOagMIv5SNmRH/view?usp=sharing" },
          { title: "PDF de Slides - Dispepsia", pdfLink: "https://drive.google.com/file/d/1DMJD4pYW0IdurD9qsMJnxG_4V4ZfLKmj/view?usp=sharing" }
        ]
      },
      {
        id: 2,
        label: "Sub-Módulo 2",
        title: "DRGE",
        imageUrl: "https://images.unsplash.com/photo-1584362917165-52e812f8dc08?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: DRGE", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1kF9YrFPAM8lv5z9VlmR_OmNdaQiXjtc_/view?usp=sharing" },
          { id: 2, title: "Aula 02 - DRGE", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1Ju9wDX9dBdpMjsghFky_ZJlocbMtI2dD/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - DRGE", pdfLink: "https://drive.google.com/file/d/1Ef8zQwBQTR5nMjp4LsFGk4jDkjyAcY-4/view?usp=sharing" },
          { title: "PDF de Slides - DRGE", pdfLink: "https://drive.google.com/file/d/1S0CeeUimruDy-P8hfXp7nWTibHAggwtx/view?usp=sharing" }
        ]
      },
      {
        id: 3,
        label: "Sub-Módulo 3",
        title: "Úlcera Péptica, H. Pylori e Gastrite",
        imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Úlcera Péptica e H. Pylori", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1-mmjMzSAu2wgeOIpbfR4GTsXjLF5f9aQ/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Úlcera Péptica, H. Pylori e Gastrite", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1AU2Vv7zeEXm7fBVqk5PX7HPg6Qy2vloJ/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Úlcera Péptica e H. Pylori", pdfLink: "https://drive.google.com/file/d/1VZKAIXFgHx0boa01SqE8uXG6hFd-s-L7/view?usp=sharing" },
          { title: "PDF de Slides - Úlcera Péptica e H. Pylori", pdfLink: "https://drive.google.com/file/d/1hMH1n9JUMV88pwAvzLes1ouH7vsBTJTo/view?usp=sharing" }
        ]
      },
      {
        id: 4,
        label: "Sub-Módulo 4",
        title: "Avaliação de Enzimas Hepáticas",
        imageUrl: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Avaliação de Enzimas Hepáticas", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1Fod2jgy_5C8qMqODMEXivji6XanL7W2s/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Avaliação de Enzimas Hepáticas", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1b54Ne-vQoo54xms2fukPX4TSYyyiUgS2/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Avaliação de Enzimas Hepáticas", pdfLink: "https://drive.google.com/file/d/11K91g-xDY4WgTTKP_BYx4m0TaUzbz6-H/view?usp=sharing" },
          { title: "PDF de Slides - Avaliação de Enzimas Hepáticas", pdfLink: "https://drive.google.com/file/d/14pwRASAWgx2p7Sqg7Nfik7fHCSzPVu7k/view?usp=sharing" }
        ]
      },
      {
        id: 5,
        label: "Sub-Módulo 5",
        title: "Doenças Hepáticas (CBP, CEP, HAI, Wilson)",
        imageUrl: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Doenças Hepáticas", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1Itigq_1NsXE8blxO7htLIB8IEVVl0rZg/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Doenças Hepáticas: CBP, CEP, HAI, Wilson", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1LVge-nX-LBL49HvgBg7-eFpcKg8ecYOx/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Doenças Hepáticas", pdfLink: "https://drive.google.com/file/d/1tO7G3uAxFp7QuICd2FFyjJE5IIOtraRI/view?usp=sharing" },
          { title: "PDF de Slides - Doenças Hepáticas", pdfLink: "https://drive.google.com/file/d/1ZIjcZsdK-Lkua1Lw-Wnr-mDQgYPaxlMK/view?usp=sharing" }
        ]
      },
      {
        id: 6,
        label: "Sub-Módulo 6",
        title: "Diarreia Agudas e Colite Pseudomembranosa",
        imageUrl: "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Diarreia Aguda e Colite", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/12tySfDYV_qn_cGlMYsoeS50_wiZFMrLA/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Diarreia Agudas e Colite Pseudomembranosa", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1ae2CmtvoNf0gv4ftxtyipXMgKnFff6-a/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Diarreia Aguda e Colite", pdfLink: "https://drive.google.com/file/d/1CHRf5mjcV1xWt3l-REfhrz0rOKGCAnNb/view?usp=sharing" },
          { title: "PDF de Slides - Diarreia Aguda e Colite", pdfLink: "https://drive.google.com/file/d/1YzKCdN31O3f47yxlfnOaZg4nCid2Ef-d/view?usp=sharing" }
        ]
      },
      {
        id: 7,
        label: "Sub-Módulo 7",
        title: "Diarreias Crônicas",
        imageUrl: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Diarreias Crônicas", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1sFfr7aS0UDScz9syCyJRiB_xRZY701co/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Diarreias Crônicas", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/19Ftle2zZcCPHNJCpFxzExQFziWaGQ5hy/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Diarreias Crônicas", pdfLink: "https://drive.google.com/file/d/19DK5atTMYTfrZjj5A_0qXUi6t_1_vIP5/view?usp=sharing" }
        ]
      },
      {
        id: 8,
        label: "Sub-Módulo 8",
        title: "Doença Inflamatória Intestinal (DII)",
        imageUrl: "https://images.unsplash.com/photo-1628352081506-83c43123ed6d?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: DII", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1zD3yJrW2Vz_ZMd1cuprNIjqgNpgUkVBk/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Doença Inflamatória Intestinal (DII)", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1EClG56GmnzE06RRnSIVv4LiMw2JuJjZJ/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - DII", pdfLink: "https://drive.google.com/file/d/1WTjNBpfH51u_GSUvQ6M-rPsMLbnuxL3e/view?usp=sharing" },
          { title: "PDF de Slides - DII", pdfLink: "https://drive.google.com/file/d/124xXwG1SHsH52QG1MZ6Ikk2oMrXsNwQq/view?usp=sharing" }
        ]
      },
      {
        id: 9,
        label: "Sub-Módulo 9",
        title: "Cirrose Hepática: Conceitos Gerais",
        imageUrl: "https://images.unsplash.com/photo-1559757175-9e359c952155?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Cirrose Hepática - Conceitos", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1FUDz58FRfzRUsZz7pWQotUoXmpe-78Y0/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Cirrose Hepática: Conceitos Gerais", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1bqJWZxaOdtEiEPO_gjoF_55a_GwGv4gM/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Cirrose Hepática: Conceitos", pdfLink: "https://drive.google.com/file/d/1ItEW4zmIK8kJd-1RUg146Ym5Q0XE5hv_/view?usp=sharing" },
          { title: "PDF de Slides - Cirrose Hepática: Conceitos", pdfLink: "https://drive.google.com/file/d/1V1S4rLkcc4BZ3tE0cSra-doQvF2obSFj/view?usp=sharing" }
        ]
      },
      {
        id: 10,
        label: "Sub-Módulo 10",
        title: "Cirrose Hepática: Ascite + PBE",
        imageUrl: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Cirrose Hepática - Ascite + PBE", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1WepuizRxBmw9gR2lAwujhsp3RMkpgCyE/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Cirrose Hepática: Ascite + PBE", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1DGyeuT28knENl_tDSBeGiGqEMIf3PFf3/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Cirrose Hepática: Ascite + PBE", pdfLink: "https://drive.google.com/file/d/1-3hm_0LXsZyTx1XCgIonZLQJG6hSK_-n/view?usp=sharing" },
          { title: "PDF de Slides - Cirrose Hepática: Ascite + PBE", pdfLink: "https://drive.google.com/file/d/1z2pMC4zRjcGonJX0ZN-0SfAN5L5yZICC/view?usp=sharing" }
        ]
      },
      {
        id: 11,
        label: "Sub-Módulo 11",
        title: "Cirrose: Encefalopatia e Sd. Hepatorrenal",
        imageUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Encefalopatia e SHR", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/15NTHYJe25LuvjGpHuuCKF1Es4AKMaJXL/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Cirrose: Encefalopatia e SHR", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1_ToL_B3NjHl5k-GtwUBpYaXtp5Ns36B5/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Encefalopatia e SHR", pdfLink: "https://drive.google.com/file/d/1Vi8jgwQBNoa1QSMpHPsZdgRF-vwVPQ80/view?usp=sharing" },
          { title: "PDF de Slides - Encefalopatia e SHR", pdfLink: "https://drive.google.com/file/d/1q_b3wnTy--3ylyp9bBIkCaEcd__hZPjg/view?usp=sharing" }
        ]
      },
      {
        id: 12,
        label: "Sub-Módulo 12",
        title: "Cirrose: Varizes e Sd. Hepatopulmonar",
        imageUrl: "https://images.unsplash.com/photo-1615631648086-325cd3d0038c?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Varizes Esofágicas", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1AvXpSlNR1d890D43hoC8i_-yUDNET7D6/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Cirrose: Varizes Esofágicas", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/19wdBDWrHzbfTYu0t848HtfY6l_ILdqu5/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Varizes Esofágicas", pdfLink: "https://drive.google.com/file/d/1MOsvqUbgS1OYD_CYShHsFQyEHouRQweF/view?usp=sharing" },
          { title: "PDF de Slides - Varizes Esofágicas", pdfLink: "https://drive.google.com/file/d/1o0rlq35hU-s2jP6Gt0CrinA14TvWLbv6/view?usp=sharing" }
        ]
      }
    ]
  },

  // --- MÓDULO 9: EPIDEMIOLOGIA ---
  {
    id: 9,
    title: "Módulo 09 - Epidemiologia",
    label: "Módulo 9",
    subModules: [
      {
        id: 1,
        label: "Sub-Módulo 1",
        title: "Associação x Causalidade",
        imageUrl: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Associação x Causalidade", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1pNy3wqAxTmACPxtUEtHMa5ZhPx4rteiO/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Associação x Causalidade", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1C55FIuoYW28Ww2Ch_n-3hN5S0YyYG_We/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Associação x Causalidade", pdfLink: "https://drive.google.com/file/d/1zp-OyfjOmn_jGh1uoeXc3x6642Do5Xz5/view?usp=sharing" },
          { title: "PDF de Slides - Associação x Causalidade", pdfLink: "https://drive.google.com/file/d/1rzI-h2Jjd0R04_eO3p0pkWuZ7ayOs6JI/view?usp=sharing" }
        ]
      },
      {
        id: 2,
        label: "Sub-Módulo 2",
        title: "Classificação dos Estudos Epidemiológicos",
        imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Classificação de Estudos", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/13eRWOcPL4SttO1aYHOVeuOxJP-YF5eN6/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Classificação dos Estudos Epidemiológicos", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1OMI5ukaiQ-MzJMcMqoWhTr_IabG2sYub/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Classificação de Estudos", pdfLink: "https://drive.google.com/file/d/104Oomppa3dqgJijhBqkzek-YBMkPkKMt/view?usp=sharing" },
          { title: "PDF de Slides - Classificação de Estudos", pdfLink: "https://drive.google.com/file/d/1iWWD7VKWvJYCKyWO4s6ZZ3WsWG4yEjw3/view?usp=sharing" }
        ]
      },
      {
        id: 3,
        label: "Sub-Módulo 3",
        title: "Estudos Longitudinais: Coorte e Caso-Controle",
        imageUrl: "https://images.unsplash.com/photo-1576091160550-2187d80a16f7?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Coorte e Caso-Controle", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1BRBqhld-udvMrfYt1UDtikun1KseMneR/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Estudos Longitudinais: Coorte e Caso-Controle", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1OONr3jW4JT534V5U6x92Vy1HArsMsm_1/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Coorte e Caso-Controle", pdfLink: "https://drive.google.com/file/d/1OhObwd4KNlaNu44_p3L425HrS4FCzgPH/view?usp=sharing" },
          { title: "PDF de Slides - Coorte e Caso-Controle", pdfLink: "https://drive.google.com/file/d/1ibX614fgeVUEsaRuzPKIueq5v8RbgT9r/view?usp=sharing" }
        ]
      },
      {
        id: 4,
        label: "Sub-Módulo 4",
        title: "Estudos Transversais",
        imageUrl: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Estudos Transversais", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1k_xSjFbgGaQgyFCC_YIDGjvRzvKZ_dyT/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Estudos Transversais", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/19pmEE8qkhe-Ol10fDh7IroWJZ9Jxb5U-/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Estudos Transversais", pdfLink: "https://drive.google.com/file/d/14RRRStoruytUgBxxMcf7veTbUUZxANxd/view?usp=sharing" },
          { title: "PDF de Slides - Estudos Transversais", pdfLink: "https://drive.google.com/file/d/1cKTKq1pu9J0A7mTVcuL4DpdIUFdtG4Xn/view?usp=sharing" }
        ]
      },
      {
        id: 5,
        label: "Sub-Módulo 5",
        title: "Testes Diagnósticos: Características Básicas",
        imageUrl: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Testes Diagnósticos - Básicas", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1ZFK42j0BRcYe_bMIePHuf7mkkyhv_wh7/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Testes Diagnósticos: Características Básicas", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1qYY-uXccOX33MAaD6k0LUZx1eRrTd2Hz/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Testes Diagnósticos: Básicas", pdfLink: "https://drive.google.com/file/d/11QeyuutbnTNHX0duD9U0CUhyKhfwXQXG/view?usp=sharing" },
          { title: "PDF de Slides - Testes Diagnósticos: Básicas", pdfLink: "https://drive.google.com/file/d/10FzbjFnjwUFLxjKztsVWrxnzXhr1bakm/view?usp=sharing" }
        ]
      },
      {
        id: 6,
        label: "Sub-Módulo 6",
        title: "Testes Diagnósticos: Aplicabilidade Clínica",
        imageUrl: "https://images.unsplash.com/photo-1579684453423-f84349ef60b0?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Testes Diagnósticos - Aplicabilidade", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1uIMri6ZJ1YEvl4Y0MpcXSLybOMweem63/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Testes Diagnósticos: Aplicabilidade Clínica", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1fKi4o-0Cs46qGD3x2mnCYO23eMPBtwGJ/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Testes Diagnósticos: Aplicabilidade", pdfLink: "https://drive.google.com/file/d/1mq7c25b_Xiz_WubNxU939l_UWfpeyEJ6/view?usp=sharing" },
          { title: "PDF de Slides - Testes Diagnósticos: Aplicabilidade", pdfLink: "https://drive.google.com/file/d/1HnGmt-cGV6M1S5QkKiSTsq7ZLXiXzJwt/view?usp=sharing" }
        ]
      },
      {
        id: 7,
        label: "Sub-Módulo 7",
        title: "Revisando Medidas de Associação",
        imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Revisando Medidas de Associação", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1zbb3h2lo9DdhQPtMAKdAsDHOHYRZCeCf/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Medidas de Associação I", pdfLink: "https://drive.google.com/file/d/1lTGV-TJIbE9DkevCrNjOgANPfD1mNFM2/view?usp=sharing" },
          { title: "Ficha Resumo - Medidas de Associação II", pdfLink: "https://drive.google.com/file/d/1jhRy1G0AKBU4Lt8lJ5_nqsazaGw5wwCJ/view?usp=sharing" },
          { title: "PDF de Slides - Medidas de Associação", pdfLink: "https://drive.google.com/file/d/1tyxRo8m-MwXW5OEnz5_H7e5bsOgIO6ps/view?usp=sharing" }
        ]
      },
      {
        id: 8,
        label: "Sub-Módulo 8",
        title: "Indicadores de Saúde - Parte I",
        imageUrl: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Indicadores de Saúde I", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1-DkHJhVymPExTnd2es34CdLREHj7JaKn/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Indicadores de Saúde: Parte I", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1yK4UNjWf5vRSr4pOcbPlX7KAmlS_JSr9/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Indicadores de Saúde I", pdfLink: "https://drive.google.com/file/d/1mX0Y24QBLz2qUJyXmKyjkZpdtwMTvQSf/view?usp=sharing" },
          { title: "PDF de Slides - Indicadores de Saúde I", pdfLink: "https://drive.google.com/file/d/13Mc31Y46IqnmTYl9Bikf_3wlUtrx_1o5/view?usp=sharing" }
        ]
      },
      {
        id: 9,
        label: "Sub-Módulo 9",
        title: "Indicadores de Saúde - Parte II",
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Indicadores de Saúde II", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1PA4iT8keCom6xkuF6_Br3twRevTYBOsG/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Indicadores de Saúde: Parte II", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1JtdtmYAzFcLhETcAJlxzYn4faC1OLtso/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Indicadores de Saúde II", pdfLink: "https://drive.google.com/file/d/1mAAMzcAu3s5OlN_7H1bp_8tJO8Y52U1a/view?usp=sharing" },
          { title: "PDF de Slides - Indicadores de Saúde II", pdfLink: "https://drive.google.com/file/d/1kFhyXzaoUMkPbteGI4p8uns4G_X2M2UG/view?usp=sharing" }
        ]
      }
    ]
  },

  // --- MÓDULO 10: CARDIOLOGIA ---
  {
    id: 10,
    title: "Módulo 10 - Cardiologia",
    label: "Módulo 10",
    subModules: [
      {
        id: 1,
        label: "Sub-Módulo 1",
        title: "SCASSST",
        imageUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: SCASSST", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1HnOYAp5ixMvcB2c95bBD25DxSYQ90mj-/view?usp=sharing" },
          { id: 2, title: "Aula 02 - SCASSST", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1dwFmfQ5kCllQeMFsSHhGbCgrgAYpCHYk/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - SCASSST", pdfLink: "https://drive.google.com/file/d/1qY0fckLwmo8MGxNCiVsq6TbkXn17qH9t/view?usp=sharing" },
          { title: "PDF de Slides - SCASSST", pdfLink: "https://drive.google.com/file/d/1skcNBiiG7ZUKjQ_aCYyu18w4CmMotTDR/view?usp=sharing" }
        ]
      },
      {
        id: 2,
        label: "Sub-Módulo 2",
        title: "SCACSST",
        imageUrl: "https://images.unsplash.com/photo-1628595351029-c2bf17511435?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: SCACSST", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1x_A4Iit2r8fyxS8VvBBlRMaXBmF0N3pr/view?usp=sharing" },
          { id: 2, title: "Aula 02 - SCACSST", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1xUA5k61WGGutQiSzeKRbTvh0BwK802uj/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - SCACSST", pdfLink: "https://drive.google.com/file/d/1-3P6sBzVtpe4VtebBMje64_Y8KcfUO20/view?usp=sharing" },
          { title: "PDF de Slides - SCACSST", pdfLink: "https://drive.google.com/file/d/1AlEBx3MrQAEvLZ_kzrHK3K4rUi5SC9FM/view?usp=sharing" }
        ]
      },
      {
        id: 3,
        label: "Sub-Módulo 3",
        title: "Hipertensão Arterial Sistêmica (HAS)",
        imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Hipertensão Arterial Sistêmica (HAS)", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1HCwmrCPu1yZiQWuRKrjTQItKVwXPOPcL/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Hipertensão Arterial Sistêmica (HAS)", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1hp20r96_WxNkDfVyHBo_hzdP9ozMNyu8/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Hipertensão Arterial Sistêmica (HAS)", pdfLink: "https://drive.google.com/file/d/1qREGSHDniJwuHQI1b67XwjmSGJD8joEl/view?usp=sharing" },
          { title: "PDF de Slide - Hipertensão Arterial Sistêmica (HAS)", pdfLink: "https://drive.google.com/file/d/1SyUDZHMCRQJ7e-WFhAEQNm4co4VqtHl5/view?usp=sharing" }
        ]
      },
      {
        id: 4,
        label: "Sub-Módulo 4",
        title: "Síndromes Aórticas Agudas",
        imageUrl: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Síndromes Aórticas Agudas", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1wDcw2jWsz-qxIHNohhzAABBLkK1BWLV7/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Síndromes Aórticas Agudas", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1HlPIWozbMeOLwFyXqRc6S_nVCxe6BE-x/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Síndromes Aórticas Agudas", pdfLink: "https://drive.google.com/file/d/10n-COlF6-XbbXScqz6mQSu9-Zwa6i0oA/view?usp=sharing" },
          { title: "PDF de Slides - Síndromes Aórticas Agudas", pdfLink: "https://drive.google.com/file/d/1apxb5DkLWrADVI6NR2_yv8u-mdtOHfFW/view?usp=sharing" }
        ]
      },
      {
        id: 5,
        label: "Sub-Módulo 5",
        title: "Anticoagulação em Cardiologia",
        imageUrl: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Anticoagulação em Cardiologia", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1MbcMdTX4RhYXNWcBTwoetPf9-iTWwkvq/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Anticoagulação em Cardiologia", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1cUgoQ6l6mLzYB6YtvXe5C3cN6Bg44aOC/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Anticoagulação em Cardiologia", pdfLink: "https://drive.google.com/file/d/1HxQMzItOdk-gvkWhTQq71y2QlJxwUn2c/view?usp=sharing" },
          { title: "PDF de Slides - Anticoagulação em Cardiologia", pdfLink: "https://drive.google.com/file/d/1DKl9Y1c6XrLC3akOcK5AfMk97GGbUlJD/view?usp=sharing" }
        ]
      },
      {
        id: 6,
        label: "Sub-Módulo 6",
        title: "Pericardite e Miocardite",
        imageUrl: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Pericardite e Miocardite", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1UnjQJk4QidYrU5AlUaz5b3pkngGWTqDh/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Pericardite e Miocardite", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/14wV1bjCNFIVpWiPr_VuRKruqU0qn-Tgs/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Pericardite e Miocardite", pdfLink: "https://drive.google.com/file/d/1On9tttZFEzND2x9D6jBMEg_Nw7JoHv3X/view?usp=sharing" },
          { title: "PDF de Slides - Pericardite e Miocardite", pdfLink: "https://drive.google.com/file/d/1Z6cwE2RR6HBcjD09yO7OTDqzm5OePrT3/view?usp=sharing" }
        ]
      },
      {
        id: 7,
        label: "Sub-Módulo 7",
        title: "Taquiarritmias",
        imageUrl: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Taquiarritmias", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1kwiHIxLgHGhNO8z3OxuX4NNYv_Ms6SxJ/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Taquiarritmias", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/18wmk4biddw-YUjKBuER0AEbFY3-5g4hv/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Taquiarritmias", pdfLink: "https://drive.google.com/file/d/11tfjYb95lDHuF8DTia0VOBcoW1s782-N/view?usp=sharing" },
          { title: "PDF de Slides - Taquiarritmias", pdfLink: "https://drive.google.com/file/d/1taFTQISbg5mzOAXJ3it4gr0aW4bC3t7k/view?usp=sharing" }
        ]
      },
      {
        id: 8,
        label: "Sub-Módulo 8",
        title: "Bradiarritmias",
        imageUrl: "https://images.unsplash.com/photo-1616012480717-fd9867059ca0?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Bradiarritmias", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1wMLoKHvm61zlwPWow-kUONTWi6GLZEzE/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Bradiarritmias", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1JJud8hIflSw12CvvN1R3IS1IFKYnMzbJ/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Bradiarritmias", pdfLink: "https://drive.google.com/file/d/1-oXjBQMJ90DlGwYUYrqQOs549pP3Bxjv/view?usp=sharing" },
          { title: "PDF de Slides - Bradiarritmias", pdfLink: "https://drive.google.com/file/d/1APtJzqGzT2WQVn2Ra5OCRBdl78rfV_ts/view?usp=sharing" }
        ]
      },
      {
        id: 9,
        label: "Sub-Módulo 9",
        title: "Valvopatias",
        imageUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Valvopatias", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1DsGK_qtrPn6-p-DleDWdLGam7towqOGv/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Valvopatias", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1bjyW5YusNRdawZU55DgAeGfERC0BuNl9/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Valvopatias", pdfLink: "https://drive.google.com/file/d/1EsRZv_0yBpLDHWgnt1a9erMNKynpKUb9/view?usp=sharing" },
          { title: "PDF de Slides - Valvopatias", pdfLink: "https://drive.google.com/file/d/1lCAahF1DsOh1sjDAETFoM8ngNeuPWKm0/view?usp=sharing" }
        ]
      },
      {
        id: 10,
        label: "Sub-Módulo 10",
        title: "Febre Reumática e Endocardite",
        imageUrl: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Febre Reumática e Endocardite", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/15Ms8KM9L7IReKQ5CplKHeM5_OJDcVgKv/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Febre Reumática e Endocardite", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1HLexJSMvvGaOArBLOC7rARMTr5vgrImL/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Febre Reumática e Endocardite", pdfLink: "https://drive.google.com/file/d/1g8WXFGnpdzrWwNd4tndcOYG_4s32TaY9/view?usp=sharing" },
          { title: "PDF de Slides - Febre Reumática e Endocardite", pdfLink: "https://drive.google.com/file/d/1UJcE1w79fQ6Z04dmj_ZTHwLLeneMktOi/view?usp=sharing" }
        ]
      },
      {
        id: 11,
        label: "Sub-Módulo 11",
        title: "Síncope",
        imageUrl: "https://images.unsplash.com/photo-1542736667-069246bdbc6d?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Síncope", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1byra8-alaJqAqFLjz_TornWzH7pgNHtE/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Síncope", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1IZfWAk0V-vasYpazWS0UvwseSe6p7kN-/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Síncope", pdfLink: "https://drive.google.com/file/d/1WNEV67fNY_o_sEqDdPq5ihhdh1vI4zPL/view?usp=sharing" },
          { title: "PDF de Slides - Síncope", pdfLink: "https://drive.google.com/file/d/1QtJgRUskLcWwGogukaG2NzAseu2-HLhN/view?usp=sharing" }
        ]
      },
      {
        id: 12,
        label: "Sub-Módulo 12",
        title: "Insuficiência Cardíaca Manejo Ambulatorial",
        imageUrl: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Insuficiência Cardíaca - Manejo Ambulatorial", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1wx2wQqLctjqa3W-4N-kL1bAIDJdFF277/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Insuficiência Cardíaca: Manejo Ambulatorial", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1uTVugk1RcfJQKgnr9Q-TykrRNIV7TSBN/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Insuficiência Cardíaca: Manejo Ambulatorial", pdfLink: "https://drive.google.com/file/d/1dZfvuT7sffrnoNL1TD1qHzAMMZHt5IBb/view?usp=sharing" },
          { title: "PDF de Slides - Insuficiência Cardíaca: Manejo Ambulatorial", pdfLink: "https://drive.google.com/file/d/1348S0INcw_c2PIDVmquAGAT7ZHoCxfi0/view?usp=sharing" }
        ]
      },
      {
        id: 13,
        label: "Sub-Módulo 13",
        title: "Insuficiência Cardíaca Descompensações Agudas",
        imageUrl: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Insuficiência Cardíaca - Descompensações Agudas", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1WVPt1n_bcf4ob90kfOoX8STgwUXWsEMw/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Insuficiência Cardíaca: Descompensações Agudas", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1Lmmy-5hdNgwnNDGyiR6TkZ8PNVIr4Jr4/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Insuficiência Cardíaca: Descompensações Agudas", pdfLink: "https://drive.google.com/file/d/1gEKpy_wQ0ZJR8S4bAsVKbN7h12qifNy1/view?usp=sharing" },
          { title: "PDF de Slides - Insuficiência Cardíaca: Descompensações Agudas", pdfLink: "https://drive.google.com/file/d/1XvhrDbPpj7i24yY7RqZuc0zYpfKAKvX5/view?usp=sharing" }
        ]
      },
      {
        id: 14,
        label: "Sub-Módulo 14",
        title: "Insuficiência Cardíaca Avançada",
        imageUrl: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Insuficiência Cardíaca Avançada", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1fb6PVhZ2dmEJxxGOtnKH1cN_kHo32NHG/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Insuficiência Cardíaca Avançada", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1YNoUGoNOXvlUR6_nj5zofs-dv8hJBVdH/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Insuficiência Cardíaca Avançada", pdfLink: "https://drive.google.com/file/d/17YkpIw-UEFmYBTgs-QSolnHVu5yUoGim/view?usp=sharing" },
          { title: "PDF de Slides - Insuficiência Cardíaca Avançada", pdfLink: "https://drive.google.com/file/d/1Icg0NdTu2k_zY9uttjdd0fet447gTPJJ/view?usp=sharing" }
        ]
      },
      {
        id: 15,
        label: "Sub-Módulo 15",
        title: "Síndrome Coronariana Crônica",
        imageUrl: "https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Síndrome Coronariana Crônica", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1QI3GyakluXypk8uholrsakZnXxiQCJ58/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Síndrome Coronariana Crônica", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1JrNh7n_v7zWhos0Ii4YhvqjoyKnH0c-Z/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Síndrome Coronariana Crônica", pdfLink: "https://drive.google.com/file/d/1GBckis9rNFx8_NOY2gIVb16wPejiB8iY/view?usp=sharing" },
          { title: "PDF de Slides - Síndrome Coronariana Crônica", pdfLink: "https://drive.google.com/file/d/1Kw8SMz9feAXucYlE8CA_7-nVak7Jgb8M/view?usp=sharing" }
        ]
      }
    ]
  },
  // --- MÓDULO 11: ENDOCRINOLOGIA ---
  {
    id: 11,
    title: "Módulo 11 - Endócrino",
    label: "Módulo 11",
    subModules: [
      {
        id: 1,
        label: "Sub-Módulo 1",
        title: "Dislipidemia: Classificação e Diagnóstico",
        imageUrl: "https://images.unsplash.com/photo-1628771065518-0d82f1938462?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Dislipidemia - Classificação", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1hSyL3j6k0Ra0-GCGqyVqAc_eLLYHjmvl/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Dislipidemia: Classificação e Diagnóstico", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/15Z_BFPGk25VEcop4aUl7vAwj3AswMcFP/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Dislipidemia", pdfLink: "https://drive.google.com/file/d/1VFlyX_wL15dacNxpDVoxtvQIZCZmpI70/view?usp=sharing" },
          { title: "PDF de Slides - Dislipidemia", pdfLink: "https://drive.google.com/file/d/1R_Jgb5MVEzHk_Yy5DBsFOWtf55DOPPMA/view?usp=sharing" }
        ]
      },
      {
        id: 2,
        label: "Sub-Módulo 2",
        title: "Tratamento das Dislipidemias",
        imageUrl: "https://images.unsplash.com/photo-1550572017-4fcd95692026?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Tratamento das Dislipidemias", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1szrotmNQCDQsLXmeWST06B4eeCjU78ap/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Tratamento das Dislipidemias", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1dVgfMRf5DHYT2ysifdpYMOzdOs2ld0jI/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Tratamento das Dislipidemias", pdfLink: "https://drive.google.com/file/d/16emHh9M7N6lg4notVVqq3vsqj7INcOAj/view?usp=sharing" },
          { title: "PDF de Slides - Tratamento das Dislipidemias", pdfLink: "https://drive.google.com/file/d/1A4yi1ulwQGU-2Cyd3fsJOV9PaR8Vrp0H/view?usp=sharing" }
        ]
      },
      {
        id: 3,
        label: "Sub-Módulo 3",
        title: "Síndrome Metabólica",
        imageUrl: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Síndrome Metabólica", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1oQ-C1rvDc6ru6saxFwSbljk3zW7EbsLV/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Síndrome Metabólica", pdfLink: "https://drive.google.com/file/d/1LO_98XHROEzoYVk37SiFqno3B1plodS5/view?usp=sharing" },
          { title: "PDF de Slides - Síndrome Metabólica", pdfLink: "https://drive.google.com/file/d/1VOMBuiEXGI5WACFbkNe8bdLvO1EXLJ_g/view?usp=sharing" }
        ]
      },
      {
        id: 4,
        label: "Sub-Módulo 4",
        title: "Obesidade: Intro e Tratamento Não-Farmacológico",
        imageUrl: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Obesidade - Intro", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/100Rd31reGVZhkBBRqJz_DTi7xmklCyJg/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Obesidade: Intro", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1DKdB3OBqdkZlt68FHdlIqqa2jlMy-VIk/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Obesidade: Intro", pdfLink: "https://drive.google.com/file/d/1RZVJ1uESXku_cexX2jcohud-ZpDcpFRd/view?usp=sharing" },
          { title: "PDF de Slides - Obesidade: Intro", pdfLink: "https://drive.google.com/file/d/1QwAwYIxeEestr7dr4IKb413AMeRoAqwv/view?usp=sharing" }
        ]
      },
      {
        id: 5,
        label: "Sub-Módulo 5",
        title: "Obesidade: Tratamento Farmacológico e Cirúrgico",
        imageUrl: "https://images.unsplash.com/photo-1628771065518-0d82f1938462?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Obesidade - Tratamento", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/12oBT_veAxTrkeKOw68XOyGSoqk5w-2p7/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Obesidade: Tratamento", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/14myIur7DkVfjvVtjDYzAfTER9ZLlahSm/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Obesidade: Tratamento", pdfLink: "https://drive.google.com/file/d/1qeOY05Qf0GbAD6xJcHyA_WzoW9hPGHcb/view?usp=sharing" },
          { title: "PDF de Slides - Obesidade: Tratamento", pdfLink: "https://drive.google.com/file/d/1ujz4oCI6F47Oa86xIAPQvg29NcGFIYZ_/view?usp=sharing" }
        ]
      },
      {
        id: 6,
        label: "Sub-Módulo 6",
        title: "Doença Hepática Esteatótica Metabólica (DHEM)",
        imageUrl: "https://images.unsplash.com/photo-1559757175-0b299a9d829c?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: DHEM", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/11c0asYVQHPbOjc9Bxl9bNMZaKiRN8dVe/view?usp=sharing" },
          { id: 2, title: "Aula 02 - DHEM", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1hMljPxpvZ6-3dqG4t1F45qK-aFeqbawg/view?usp=sharing" }
        ],
        materials: [
          { title: "PDF de Slides - DHEM", pdfLink: "https://drive.google.com/file/d/1r8OAGHKaNdL4kPOLAVyiiBv2alxZYiGj/view?usp=sharing" }
        ]
      },
      {
        id: 7,
        label: "Sub-Módulo 7",
        title: "Diabetes: Classificação e Diagnóstico",
        imageUrl: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Diabetes - Classificação", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1r8v4ikBgzWyFWw1aovoisyhXYVvIqxrS/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Diabetes: Classificação e Diagnóstico", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1L_lsHEjEGKcLbVriXC377hAKEeM5HEp4/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Diabetes: Classificação", pdfLink: "https://drive.google.com/file/d/16uTBVEFm7MCWQSkOG32hTZqyj6g0A3SU/view?usp=sharing" },
          { title: "PDF de Slides - Diabetes: Classificação", pdfLink: "https://drive.google.com/file/d/1PjqrYqRDaLdwzxiaaNGeawR475X00O8S/view?usp=sharing" }
        ]
      },
      {
        id: 8,
        label: "Sub-Módulo 8",
        title: "Meta Terapêutica e Manejo do Pré-DM",
        imageUrl: "https://images.unsplash.com/photo-1628771065518-0d82f1938462?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Meta Terapêutica", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1USeD-JUrRho8P9VbD-pZLEPOthGrWze6/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Meta Terapêutica e Manejo do Pré-DM", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/13xqDjtPaTA4JY0tE9tZ5tc2dnwQT2Cbv/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Meta Terapêutica", pdfLink: "https://drive.google.com/file/d/1taqm1jNX-sFE_NFKt9lM53ipZ83blQfO/view?usp=sharing" },
          { title: "PDF de Slides - Meta Terapêutica", pdfLink: "https://drive.google.com/file/d/118ReH1zWOiKyjMQPx_dn2TeW2yfcI-id/view?usp=sharing" }
        ]
      },
      {
        id: 9,
        label: "Sub-Módulo 9",
        title: "Antidiabéticos Orais e Subcutâneos I",
        imageUrl: "https://images.unsplash.com/photo-1550572017-4fcd95692026?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Antidiabéticos I", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/173h7ePTNQoOZSpZVGmynO5K3XKhrJJgx/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Antidiabéticos Orais e Subcutâneos I", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1HmuDRHga6CIQXfJgL85l4q9NR7J3E39o/view?usp=sharing" }
        ],
        materials: [
          { title: "Errata - Antidiabéticos Orais", pdfLink: "https://drive.google.com/file/d/1FjSJZc-tvd4rpKM-GpZMyOtxl8x5W1P0/view?usp=sharing" },
          { title: "Ficha Resumo - Antidiabéticos I", pdfLink: "https://drive.google.com/file/d/1mO23G_EklGKZRhAvKx-K1N-yoJjbAlaw/view?usp=sharing" },
          { title: "PDF de Slides - Antidiabéticos I", pdfLink: "https://drive.google.com/file/d/1vbmJkxPTWj1U9tXFgVDrmIkDtMSafVkp/view?usp=sharing" }
        ]
      },
      {
        id: 10,
        label: "Sub-Módulo 10",
        title: "Antidiabéticos Orais e Subcutâneos II",
        imageUrl: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Antidiabéticos II", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1iPvo9MD-7ZU9OrnoZTXAGM3bZSGfoQGn/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Antidiabéticos Orais e Subcutâneos II", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1n-H_ZxplcsF6Ry2OTqs1S2-6hxHTCZHJ/view?usp=sharing" }
        ],
        materials: [
          { title: "Errata - Antidiabéticos II", pdfLink: "https://drive.google.com/file/d/1fWb-3MyfRoR13w3Gin7YxhzEfNAFJUDp/view?usp=sharing" },
          { title: "Ficha Resumo - Antidiabéticos II", pdfLink: "https://drive.google.com/file/d/1gHKNICFlUJ5xuZSUAHArrzlabUX9rGIF/view?usp=sharing" },
          { title: "PDF de Slides - Antidiabéticos II", pdfLink: "https://drive.google.com/file/d/1sfvulbBnfDqsZCkn2AMURTmmbnKhIDou/view?usp=sharing" }
        ]
      },
      {
        id: 11,
        label: "Sub-Módulo 11",
        title: "Insulinoterapia",
        imageUrl: "https://images.unsplash.com/photo-1628771065518-0d82f1938462?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Insulinoterapia", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1WDfxXGgyqJAeKtPGaNjkH4IIN_8UTqAw/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Insulinoterapia", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/110V60vqFQ3-7VYROjUfdqXshsjHVEjLQ/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Insulinoterapia", pdfLink: "https://drive.google.com/file/d/1FmLxne5R8KLlrXfkruGJPz4vXVnPBTe5/view?usp=sharing" },
          { title: "PDF de Slides - Insulinoterapia", pdfLink: "https://drive.google.com/file/d/16maglEGYCuLgerJT4dXcwuuJIEIQM3HQ/view?usp=sharing" }
        ]
      },
      {
        id: 12,
        label: "Sub-Módulo 12",
        title: "Hiperglicemia Hospitalar",
        imageUrl: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Hiperglicemia Hospitalar", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1ZER_zKMmInbuy4Ll5VzVzsJ7CojUoTPe/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Hiperglicemia Hospitalar", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1zzHPPB1t1yoL-vfBCwpU4FAWrCFNCCsz/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Hiperglicemia Hospitalar", pdfLink: "https://drive.google.com/file/d/1sqg6K8nDyY7r5qGVxajaDrJeGpl-o6Dt/view?usp=sharing" },
          { title: "PDF de Slides - Hiperglicemia Hospitalar", pdfLink: "https://drive.google.com/file/d/1_MN_yZ0Ifya3ikj1aHQuuEeAfj0jA0LU/view?usp=sharing" }
        ]
      },
      {
        id: 13,
        label: "Sub-Módulo 13",
        title: "Complicações Crônicas do DM",
        imageUrl: "https://images.unsplash.com/photo-1559757175-0b299a9d829c?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Complicações Crônicas DM", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/11on7ZWzdJbGiR8VmbAyCTfDZfa8KR1ra/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Complicações Crônicas do DM", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1AG5_1BfYTuYlh4DctqFm49lYkaIqjxrW/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Complicações Crônicas DM", pdfLink: "https://drive.google.com/file/d/1S73VwlKXpcvn4D94UdakeDyeKpl18fLi/view?usp=sharing" },
          { title: "PDF de Slides - Complicações Crônicas DM", pdfLink: "https://drive.google.com/file/d/1YJmbhUgREMHSgfK3cacdfns6w4JUojX/view?usp=sharing" }
        ]
      },
      {
        id: 14,
        label: "Sub-Módulo 14",
        title: "Fisiologia da Tireoide",
        imageUrl: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Fisiologia da Tireoide", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1AtxHJyGULqIdP_oI23m_JXMLIWSV6Iqi/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Fisiologia da Tireoide", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1GLpS0tZucKxB1HryuGyNyq12UF28ckG2/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Fisiologia da Tireoide", pdfLink: "https://drive.google.com/file/d/1L94q6Ri78Ea8tiMDLChrh6EWLwJLKA0v/view?usp=sharing" },
          { title: "PDF de Slides - Fisiologia da Tireoide", pdfLink: "https://drive.google.com/file/d/1RPvuT1SbhF_eHEbfvIclo5WxrzgXe84A/view?usp=sharing" }
        ]
      },
      {
        id: 15,
        label: "Sub-Módulo 15",
        title: "Hipotireoidismo",
        imageUrl: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Hipotireoidismo", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/161DskCCJypWSh7NPkJhvBSQIUR5whl85/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Hipotireoidismo", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1q4maUbfVtYamh8mnPsyNGHbo_MEKTPev/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Hipotireoidismo", pdfLink: "https://drive.google.com/file/d/1LBHeXzlR_qJaGCWpxHJzzsNSEh4MSJw2/view?usp=sharing" },
          { title: "PDF de Slides - Hipotireoidismo", pdfLink: "https://drive.google.com/file/d/110VOWsuXWZgEwi1ytMWDA0nEiWn_GC9s/view?usp=sharing" }
        ]
      },
      {
        id: 16,
        label: "Sub-Módulo 16",
        title: "Hipertireoidismo",
        imageUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Hipertireoidismo", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/18jGMwpSrbl-KXRiW7l6F-giTx7elqv44/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Hipertireoidismo", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1ActvRUGw0-6Dkxt4JuPHSAVv8MVD8p0l/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Hipertireoidismo", pdfLink: "https://drive.google.com/file/d/1cqDnxaXMwalKH1vRKL-T2TTr-EK5xnGA/view?usp=sharing" },
          { title: "PDF de Slides - Hipertireoidismo", pdfLink: "https://drive.google.com/file/d/1ooUmcMEveftilWeMJA3r3txVvTWkEClQ/view?usp=sharing" }
        ]
      },
      {
        id: 17,
        label: "Sub-Módulo 17",
        title: "Nódulos e Câncer de Tireoide",
        imageUrl: "https://images.unsplash.com/photo-1559757175-9e359c952155?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Nódulos e Câncer", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1uJHSf8nduH-6jBK0pBe6R_ZAz0ANEbor/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Nódulos e Câncer de Tireoide", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1wB52BZe4WpDid169hZ37dmYPhQC4WZ-k/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Nódulos e Câncer de Tireoide", pdfLink: "https://drive.google.com/file/d/1E_6g9uHESFA3A9-4mq-Hytm8BynoZcRz/view?usp=sharing" },
          { title: "PDF de Slides - Nódulos e Câncer de Tireoide", pdfLink: "https://drive.google.com/file/d/1DrZcHhcxMfaeoJI5ZMn7nnijpPUt1znE/view?usp=sharing" }
        ]
      },
      {
        id: 18,
        label: "Sub-Módulo 18",
        title: "Tireoidites & Síndrome do Eutireoidiano Doente",
        imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Tireoidites", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1zgMnX7Hp_mYthLTQLOwuJADVwjlpap_a/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Tireoidites & Sd. Eutireoidiano Doente", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1TRVrOfKw7wWzXgGPwjUie4tXVUFV2Qmg/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Tireoidites", pdfLink: "https://drive.google.com/file/d/1YtpY0d0HSF1Zt6P_yKb2EXzA-W14Lft3/view?usp=sharing" },
          { title: "PDF de Slides - Tireoidites", pdfLink: "https://drive.google.com/file/d/1q5uVtAZRBqIYSd0cyelJyJzQ6238mmrC/view?usp=sharing" }
        ]
      },
      {
        id: 19,
        label: "Sub-Módulo 19",
        title: "Insuficiência Adrenal",
        imageUrl: "https://images.unsplash.com/photo-1559757175-0b299a9d829c?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Insuficiência Adrenal", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1lZYiMpP_R7cuq1Q3dSSdTmqhL2aBUtmV/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Insuficiência Adrenal", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1ENWTg_oiPOAgZy6ynWchCRgahbsXFssX/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Insuficiência Adrenal", pdfLink: "https://drive.google.com/file/d/1jegd8TBNDETPCMFerr5k5HSM-S0ch-09/view?usp=sharing" },
          { title: "PDF de Slides - Insuficiência Adrenal", pdfLink: "https://drive.google.com/file/d/1ENcsNlM-JpA_sOSAu0uj6sZRNlsr5Jmf/view?usp=sharing" }
        ]
      },
      {
        id: 20,
        label: "Sub-Módulo 20",
        title: "Hiperaldosteronismo Primário",
        imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Hiperaldosteronismo", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1gk53JARCYfsyFTTuqlNzUjVBt19c4zp8/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Hiperaldosteronismo Primário", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1Xg9NW1pyT6Dsj7w-OxNg5FJdACWVC3Hf/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Hiperaldosteronismo", pdfLink: "https://drive.google.com/file/d/1A0M98trYGv9Z6Wla-JMRl_dIhzVEH0VH/view?usp=sharing" },
          { title: "PDF de Slides - Hiperaldosteronismo", pdfLink: "https://drive.google.com/file/d/1tGcMMn6pl4u5ViMCsfZXypVZTQzLpTtb/view?usp=sharing" }
        ]
      },
      {
        id: 21,
        label: "Sub-Módulo 21",
        title: "Incidentaloma Adrenal",
        imageUrl: "https://images.unsplash.com/photo-1559757175-9e359c952155?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Incidentaloma Adrenal", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1sXtUGS3KY5HVoJ0b7asmixkhUeMORRQk/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Incidentaloma Adrenal", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1gDA5HfoEZfuP9jufowN2GegPjzPyVywn/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Incidentaloma Adrenal", pdfLink: "https://drive.google.com/file/d/10Q-j9S5AKEZQVOOWi2xN6ZFXV2O71dHO/view?usp=sharing" },
          { title: "PDF de Slides - Incidentaloma Adrenal", pdfLink: "https://drive.google.com/file/d/1qKfxapoqel6OnAOvbF3582C6O9LuHQDF/view?usp=sharing" }
        ]
      },
      {
        id: 22,
        label: "Sub-Módulo 22",
        title: "Prolactinomas",
        imageUrl: "https://images.unsplash.com/photo-1559757175-0b299a9d829c?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Prolactinomas", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/11na5j0tjhZTLLQYz-W875qiJ5ZpXqOzJ/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Prolactinomas", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1Qh2UoQptzs09aMEKsuv6uB7KvjWPwlGp/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Prolactinomas", pdfLink: "https://drive.google.com/file/d/1nI8UVILDOZD9GC_uRQQeZJNC9_f7A9E6/view?usp=sharing" },
          { title: "PDF de Slides - Prolactinomas", pdfLink: "https://drive.google.com/file/d/1yTnO3F4QGlq0CtKHDZEFCQjtoGYdBqcR/view?usp=sharing" }
        ]
      },
      {
        id: 23,
        label: "Sub-Módulo 23",
        title: "Outros Distúrbios Hipofisários",
        imageUrl: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Outros Distúrbios", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1WoApQpB4iL_i6Ob1S4wVHhjUitg9mAUn/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Outros Distúrbios Hipofisários", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/13Efez6hMVtim4jQ-CMy7M3Ew8tSfPD45/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Outros Distúrbios", pdfLink: "https://drive.google.com/file/d/1iR4CFoOfL3b51enI4FTog39SrfgzY3Kj/view?usp=sharing" },
          { title: "PDF de Slides - Outros Distúrbios", pdfLink: "https://drive.google.com/file/d/1jSg_3ee0pyvRHo8O9g8PQXSJB03NWAJv/view?usp=sharing" }
        ]
      },
      {
        id: 24,
        label: "Sub-Módulo 24",
        title: "Síndrome de Cushing",
        imageUrl: "https://images.unsplash.com/photo-1559757175-0b299a9d829c?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Síndrome de Cushing", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1BmATYdAYB1xjaQ4q7VLJG1bYA3I_Bw3R/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Síndrome de Cushing", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1o_YgeSX48Rsp9ArwkEf24Pt3SNRTlcHj/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Síndrome de Cushing", pdfLink: "https://drive.google.com/file/d/15poww6uHLf-6f6eCqAbynEaXOh0CL9yy/view?usp=sharing" },
          { title: "PDF de Slides - Síndrome de Cushing", pdfLink: "https://drive.google.com/file/d/1wlYXhKtTWZ7SwhyfDXxgd8Y_EcKLdTxu/view?usp=sharing" }
        ]
      }
    ]
  },

  // --- MÓDULO 12: PREVENTIVA ---
  {
    id: 12,
    title: "Módulo 12 - Preventiva",
    label: "Módulo 12",
    subModules: [
      {
        id: 1,
        label: "Sub-Módulo 1",
        title: "Teste diagnósticos exercícios",
        imageUrl: "https://images.unsplash.com/photo-1579684453423-f84349ca60df?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Teste diagnósticos exercícios", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1-zmFMKJWTACVbdBCnXfWzdD-yAQJTlvX/view?usp=sharing" },
          { id: 2, title: "Teste diagnósticos exercícios (Parte 2)", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/16PpU1uqtZq2X6BKsp8VLrYeM8nWrGbUN/view?usp=sharing" }
        ],
        materials: [
          { title: "PDF de slides - Teste diagnosticos exercicios.pdf", pdfLink: "https://drive.google.com/file/d/1M4tOjXXP5o-1uaR9ET_eaB37t6d_gpmt/view?usp=sharing" },
          { title: "Ficha Resumo - Teste diagnosticos exercicios.pdf", pdfLink: "https://drive.google.com/file/d/1N4FX_AgQQXIxIPLbXT9Kc2jt2b2jWJwt/view?usp=sharing" }
        ]
      }
    ]
  },

  // --- MÓDULO 13: REUMATOLOGIA ---
  {
    id: 13,
    title: "Módulo 13 - Reumatologia",
    label: "Módulo 13",
    subModules: [
      {
        id: 1,
        label: "Sub-Módulo 1",
        title: "Introdução às Artrites e Artrite Reumatoide (AR)",
        imageUrl: "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Introdução às Artrites e AR", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1IfVD3-rqTos9aXw6S1IoWOpDtdYazmsT/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Introdução às Artrites", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1xhQ4VZS2UN5JrHw0CKwuu0wOt0qoNXN3/view?usp=sharing" },
          { id: 3, title: "Aula 03 - Artrite Reumatoide (AR)", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1S6Brs-lE8eu-omb8oCSpjz_f4VmYX4Ug/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Introdução às Artrites", pdfLink: "https://drive.google.com/file/d/1N4HznwRTJEmFXi5VmF1tPST7peaonph8/view?usp=sharing" },
          { title: "Ficha Resumo - Artrite Reumatoide (AR)", pdfLink: "https://drive.google.com/file/d/1Do17fChUfnVRJmsmjVROM0TZMiRPYjPf/view?usp=sharing" },
          { title: "PDF de Slides - Introdução às Artrites e AR", pdfLink: "https://drive.google.com/file/d/1MpMvsQ-B6i7UsHbVIEfLZOrnoTOb2CKj/view?usp=sharing" }
        ]
      },
      {
        id: 2,
        label: "Sub-Módulo 2",
        title: "Espondiloartrites",
        imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Espondiloartrites", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1V0NcjNi0YnSEWVLyb6fGVibHcusZmzHB/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Espondiloartrites", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1bTFp8jVbfMOF1hwJ3fPn0LbOr8y5Mlxs/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Espondiloartrites", pdfLink: "https://drive.google.com/file/d/1Qpze6hro0uYF6KsU6E9ree7KEid_P9wz/view?usp=sharing" },
          { title: "PDF de Slides - Espondiloartrites", pdfLink: "https://drive.google.com/file/d/1fwVnE9ZSdA9bWG7E_By4M4l4zoCGZiwB/view?usp=sharing" }
        ]
      },
      {
        id: 3,
        label: "Sub-Módulo 3",
        title: "Osteoartrite",
        imageUrl: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Osteoartrite", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1DRyz6CL-FFSblgWG7j3qV0WxHlD_G6vG/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Osteoartrite", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1D9Mlbexu2MFKRxgefZQh4TA8XxavtP3_/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Osteoartrite", pdfLink: "https://drive.google.com/file/d/1yABQK3XRt6fLHpkbVSLO1ZAL82GVNFwi/view?usp=sharing" },
          { title: "PDF de Slides - Osteoartrite", pdfLink: "https://drive.google.com/file/d/19rYz6u-q70sRhGxq8S_cDVf-TJ4hHkl9/view?usp=sharing" }
        ]
      },
      {
        id: 4,
        label: "Sub-Módulo 4",
        title: "Artrites Microcristalinas (Gota e CPPD)",
        imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Artrites Microcristalinas", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1MD-tno-xHEJx-6rXk8Ct9TxaI8clJz7y/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Artrites Microcristalinas (Gota e CPPD)", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1xghfbO-msUaB0LvxTMdlSFAJJyhZe6ik/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Artrites Microcristalinas (Gota e CPPD)", pdfLink: "https://drive.google.com/file/d/1dRIPYfk8_wMzxcJ4NTyTpJuzjeyX1-wS/view?usp=sharing" },
          { title: "PDF de Slides - Artrites Microcristalinas (Gota e CPPD)", pdfLink: "https://drive.google.com/file/d/1-rpmWPz_UNP_qWsSFSB51AiiSpGiKLj9/view?usp=sharing" }
        ]
      },
      {
        id: 5,
        label: "Sub-Módulo 5",
        title: "Fibromialgia",
        imageUrl: "https://images.unsplash.com/photo-1544118849-c53bd9d00377?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Fibromialgia", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1rIoBMVVLBIN9R2cLunkNQzVkt9igntDX/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Fibromialgia", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/15Ibbvmjx-ZZ1VFrsXgMo3J30q0l0XorI/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Fibromialgia", pdfLink: "https://drive.google.com/file/d/1Hw5i8eOP3YGox8hEAAaqhifyvvv_Iy-a/view?usp=sharing" },
          { title: "PDF de Slides - Fibromialgia", pdfLink: "https://drive.google.com/file/d/1PlWqVNvm0JEvhoiQM53jghOpkkeSOVeF/view?usp=sharing" }
        ]
      },
      {
        id: 6,
        label: "Sub-Módulo 6",
        title: "Osteoporose",
        imageUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Osteoporose", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1wUCp1Kgxjk1T-RMPtAnorzKsJTCUSqCJ/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Osteoporose", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1VKEdzunD28V81l1XC9eMRJvBAqGS4tir/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Osteoporose", pdfLink: "https://drive.google.com/file/d/1mNFQQ1s9t1Y0zZv0R09NMoKFRHgXkCFM/view?usp=sharing" },
          { title: "PDF de Slides - Osteoporose", pdfLink: "https://drive.google.com/file/d/1WcwaqER9Il1kPyU69ttDtUB47zMiUdSk/view?usp=sharing" }
        ]
      },
      {
        id: 7,
        label: "Sub-Módulo 7",
        title: "Vasculites de Pequenos Vasos",
        imageUrl: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Vasculites de Pequenos Vasos", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1eCU3nRJdmFx5gAtHVskpl2gpdT_XK5WL/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Vasculites de Pequenos Vasos", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1TaM4qJOH1nbOosE3itGA-oCfJgOYRyr1/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Vasculites de Pequenos Vasos", pdfLink: "https://drive.google.com/file/d/1X0ELVzWgDJ0wTbabEHx34pKYXw6Qmf4I/view?usp=sharing" },
          { title: "PDF de Slides - Vasculites de Pequenos Vasos", pdfLink: "https://drive.google.com/file/d/1N8SViwAJZMfwPGsNlFgZSwJDPJYDs4-U/view?usp=sharing" }
        ]
      },
      {
        id: 8,
        label: "Sub-Módulo 8",
        title: "Vasculites de Grandes e Médios Vasos",
        imageUrl: "https://images.unsplash.com/photo-1628595351029-c2bf17511435?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Vasculites de Grandes e Médios Vasos", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1XOmuzALoGtKzxZsdWWIpigc4eIvtxDuA/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Vasculites de Grandes e Médios Vasos", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1Cp4CQD8MDXswPEGQki2mcTN24B1zm24l/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Vasculites de Grandes e Médios Vasos", pdfLink: "https://drive.google.com/file/d/1hswaI8oKipmRVc3pmYn6e2Ht0OF9iEyc/view?usp=sharing" },
          { title: "PDF de Slides - Vasculites de Grandes e Médios Vasos", pdfLink: "https://drive.google.com/file/d/1DTfQt8Iu_mNjIWVDIqq4NwCQtHcp_lAa/view?usp=sharing" }
        ]
      },
      {
        id: 9,
        label: "Sub-Módulo 9",
        title: "Doença de Behçet",
        imageUrl: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Doença de Behçet", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1yY80xD52wsiMp50_9vcMajzxSTQnOHs/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Doença de Behçet", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/12dN8xgrAygD-OpeWeuoUrLJCAENxWx8T/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Doença de Behçet", pdfLink: "https://drive.google.com/file/d/1h4PAiXG4evgRSTZ4y-InMnMDDPcqd2A4/view?usp=sharing" },
          { title: "PDF de Slides - Doença de Behçet", pdfLink: "https://drive.google.com/file/d/1J5A3Fw46lPwoMMifDhT_dBnyeOYCSvX9/view?usp=sharing" }
        ]
      },
      {
        id: 10,
        label: "Sub-Módulo 10",
        title: "Lúpus Eritematoso Sistêmico",
        imageUrl: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Lúpus Eritematoso Sistêmico", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1pkSvFmR9tz_z3aqGGbKvCCsXLrvxwk2C/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Lúpus Eritematoso Sistêmico", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1gHt7d5HEKypnnLIHVXNCyGuh_q1DysrL/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Lúpus Eritematoso Sistêmico", pdfLink: "https://drive.google.com/file/d/1byxyBopIOXuQ0zlwmALjQvSrAWr40IRb/view?usp=sharing" },
          { title: "PDF de Slides - Lúpus Eritematoso Sistêmico", pdfLink: "https://drive.google.com/file/d/1NELpO6ZBxR8IJXqxEfMDHdzH27UYODhS/view?usp=sharing" }
        ]
      },
      {
        id: 11,
        label: "Sub-Módulo 11",
        title: "Esclerose Sistêmica",
        imageUrl: "https://images.unsplash.com/photo-1576091160550-21733e99dbb9?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Esclerose Sistêmica", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1aKR9zwX8ch_M_eKWcz4dBANCMftxjeWU/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Esclerose Sistêmica", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/186t00KeptS_d8saopgvff1iHQ5pnOzsX/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Esclerose Sistêmica", pdfLink: "https://drive.google.com/file/d/11znY0YM7iqeUuCXdnvAbEdqULb6I1lLQ/view?usp=sharing" },
          { title: "PDF de Slides - Esclerose Sistêmica", pdfLink: "https://drive.google.com/file/d/1s8CLYgIN_b4iEDe7jcZcGECJVNwQtW_6/view?usp=sharing" }
        ]
      }
    ]
  },

  // --- MÓDULO 14: NEFROLOGIA ---
  {
    id: 14,
    title: "Módulo 14 - Nefrologia",
    label: "Módulo 14",
    subModules: [
      {
        id: 1,
        label: "Sub-Módulo 1",
        title: "Gasometria Arterial I",
        imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Gasometria Arterial I", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1bvuJM2AQwHB2L57pfx2d20necg69FnJD/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Gasometria Arterial I", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1BTBYSZNMzG_ogWeNQaMtioo0mRsxcZOG/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Gasometria Arterial I", pdfLink: "https://drive.google.com/file/d/1mIUpmP2mZWzjTsB8iX2_3yKUoD8uaKM2/view?usp=sharing" },
          { title: "Errata - Ficha Resumo: Gasometria Arterial I", pdfLink: "https://drive.google.com/file/d/10ka12dHKqpR8SIgJKt6m6Fctc3rqz262/view?usp=sharing" },
          { title: "PDF de Slides - Gasometria Arterial I", pdfLink: "https://drive.google.com/file/d/1pY090lojECS0YYOq7K1h2HMp_lTDdVNv/view?usp=sharing" }
        ]
      },
      {
        id: 2,
        label: "Sub-Módulo 2",
        title: "Gasometria Arterial II",
        imageUrl: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Gasometria Arterial II", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1pN-dvBg5nt8IsphCP-DopIlG3IZy2i6Z/view?usp=sharing" },
          { id: 2, title: "Aula 02 - CofExpress: Gasometria Arterial II", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/19dxHKqInoLGxIoqQTcbCYSD1aN3HgWsZ/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Gasometria Arterial II", pdfLink: "https://drive.google.com/file/d/16vWvv40yDLGgUS8l-AsChhhrLMBWla0F/view?usp=sharing" },
          { title: "PDF de Slides - Gasometria Arterial II", pdfLink: "https://drive.google.com/file/d/1MptRHq86RN4zBhc_PVHu4SeF8rmEysXg/view?usp=sharing" }
        ]
      },
      {
        id: 3,
        label: "Sub-Módulo 3",
        title: "Distúrbios do Sódio",
        imageUrl: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Distúrbios do Sódio", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1HA-mK8hqPOIILAY0E6U7tzmdn_QJePF_/view?usp=sharing" },
          { id: 2, title: "Aula 02 - CofExpress: Distúrbios do Sódio", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1UI3NgLmQn1nGPuRCpEwnVuGSRXREEXb_/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Distúrbios do Sódio", pdfLink: "https://drive.google.com/file/d/1BHhUP2fH-2SFRannV00Wh8oxOXfviWGy/view?usp=sharing" },
          { title: "PDF de Slides - Distúrbios do Sódio", pdfLink: "https://drive.google.com/file/d/1G8i0cNwO13piBnWM4f1WIU4WQmVCsQtq/view?usp=sharing" }
        ]
      },
      {
        id: 4,
        label: "Sub-Módulo 4",
        title: "Distúrbios do Potássio",
        imageUrl: "https://images.unsplash.com/photo-1628595351029-c2bf17511435?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Distúrbios do Potássio", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1QC0jj2PbZRdGK_QXkXbCDHJG17paMQ3R/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Distúrbios do Potássio", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/16tIMfjG2RuF44hFtQHixP5y6QK3so7Js/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Distúrbios do Potássio", pdfLink: "https://drive.google.com/file/d/1zMyACK2YAGi9vZpEv8aeHSH4xet6MhWS/view?usp=sharing" },
          { title: "PDF de Slides - Distúrbios do Potássio", pdfLink: "https://drive.google.com/file/d/1q9r5R8ZbdFFqyA-M4xCeD7RPE0Y2XAZa/view?usp=sharing" }
        ]
      },
      {
        id: 5,
        label: "Sub-Módulo 5",
        title: "Infecção do Trato Urinário (ITU)",
        imageUrl: "https://images.unsplash.com/photo-1631815588712-7b11a426f641?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Infecção do Trato Urinário (ITU)", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/14DTbPi-KAp6RHXg9jVLyVPeLAtK3VpeX/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Infecção do Trato Urinário (ITU)", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1QeDIz5oONv_CFhY-YTHljBmjvZvG0-jV/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Infecção do Trato Urinário (ITU)", pdfLink: "https://drive.google.com/file/d/1wpcypGv2DxtxUnmz2f9IBILLEsmpp4qP/view?usp=sharing" },
          { title: "PDF de Slides - Infecção do Trato Urinário (ITU)", pdfLink: "https://drive.google.com/file/d/1qnEOPovCmy12hJ1fd-kmS03A8Aw_jsAX/view?usp=sharing" }
        ]
      },
      {
        id: 6,
        label: "Sub-Módulo 6",
        title: "Injúria Renal Aguda (IRA) Parte I",
        imageUrl: "https://images.unsplash.com/photo-1579684453423-f84349ca60df?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Injúria Renal Aguda (IRA) - Parte I", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1PRbE-3j82kJswcL4nYZvKnwXraxn8Fah/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Injúria Renal Aguda (IRA): Parte I", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/163WvG3mkElwu9g7djTuYKEfHdq-SotuD/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Injuria Renal Aguda (IRA): Parte I", pdfLink: "https://drive.google.com/file/d/1t0-C0B35Exp66bQiuNRlF94Ej4Q3fxFX/view?usp=sharing" },
          { title: "PDF de Slides - Injuria Renal Aguda (IRA): Parte I", pdfLink: "https://drive.google.com/file/d/19yiaNdER8lnPj-p3oNwoU71oWzsTfy6y/view?usp=sharing" }
        ]
      },
      {
        id: 7,
        label: "Sub-Módulo 7",
        title: "Injúria Renal Aguda (IRA) Parte II",
        imageUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Injúria Renal Aguda (IRA) - Parte II", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1UrD1nJZFEFql0hKKsWEEmn-rGAW0J4xL/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Injúria Renal Aguda (IRA): Parte II", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1C6UERorgVkVcum2ya861HSEzevEsskXX/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Injuria Renal Aguda (IRA): Parte II", pdfLink: "https://drive.google.com/file/d/1sWNyGvIstITbQR_8xTlaf2P96ZEpyMAG/view?usp=sharing" },
          { title: "PDF de Slides - Injuria Renal Aguda (IRA): Parte II", pdfLink: "https://drive.google.com/file/d/1cZolUpdMlgMfSK59PqfCrBBkspzoec1T/view?usp=sharing" }
        ]
      },
      {
        id: 8,
        label: "Sub-Módulo 8",
        title: "Doença Renal Crônica I",
        imageUrl: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Doença Renal Crônica I", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1jMXERcpWbnPFUznI1gtbA-vByRPXSmc-/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Doença Renal Crônica I", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1nmYLDX-0euHeM9Y_mCzxH_pBHCGEhZiJ/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Doença Renal Crônica I", pdfLink: "https://drive.google.com/file/d/1LSrydfFkGfDbDW4VGsriL7nvZLs3ILBr/view?usp=sharing" },
          { title: "PDF de Slides - Doença Renal Crônica I", pdfLink: "https://drive.google.com/file/d/1syhh3svcRB8pV01-UZryJVIB6ppBRpI_/view?usp=sharing" }
        ]
      },
      {
        id: 9,
        label: "Sub-Módulo 9",
        title: "Doença Renal Crônica II",
        imageUrl: "https://images.unsplash.com/photo-1576091160550-21733e99dbb9?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Doença Renal Crônica II", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1G3g5oIGEuR3p7Y-jxcXqcNacvTFqtGUE/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Doença Renal Crônica II", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1UiOmkzXm9KynhwPrePzdnyRAgPzCtdvN/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Doença Renal Crônica II", pdfLink: "https://drive.google.com/file/d/1Xxf0-JXHjjcAxP4o4oHu0ZPPY-lpln9H/view?usp=sharing" },
          { title: "PDF de Slides - Doença Renal Crônica II", pdfLink: "https://drive.google.com/file/d/1CGOcslT9YKDDAekemTBMEjreq5HfSoxS/view?usp=sharing" }
        ]
      },
      {
        id: 10,
        label: "Sub-Módulo 10",
        title: "Glomerulopatias I",
        imageUrl: "https://images.unsplash.com/photo-1582719471384-c505187e1119?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Glomerulopatias I", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1fHOcaZCIVl0jZbNfAzIM1pVYE0pMdm4i/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Glomerulopatias I", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/19oEmyB6ewZCsIIUBnM6hqicyTxWo37sV/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Glomerulopatias I", pdfLink: "https://drive.google.com/file/d/1KOy_L-jO1McBqkgK7oUqUybQ4gvSFtY3/view?usp=sharing" },
          { title: "PDF de Slides - Glomerulopatias I", pdfLink: "https://drive.google.com/file/d/1lCC5cOG6_d7VMJtl9R5-pEJHzCPJSlSG/view?usp=sharing" }
        ]
      },
      {
        id: 11,
        label: "Sub-Módulo 11",
        title: "Glomerulopatias II",
        imageUrl: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Glomerulopatias II", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1SGwI7wDZ8icwOv4QT3ApUC3G7Ltk7nLU/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Glomerulopatias II", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1BvrnDJuTUhChoZ65pH3E0IOdcUK-WErC/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Glomerulopatias II", pdfLink: "https://drive.google.com/file/d/1MoMlrIZZB6gzPqnI9JYMgiGrpPBlFfp8/view?usp=sharing" },
          { title: "PDF de Slides - Glomerulopatias II", pdfLink: "https://drive.google.com/file/d/1Qq-dmPZjfgxaTBaoJY9WJ9v_bb_N_idi/view?usp=sharing" }
        ]
      },
      {
        id: 12,
        label: "Sub-Módulo 12",
        title: "Distúrbios do Cálcio",
        imageUrl: "https://images.unsplash.com/photo-1632053002928-19349c259740?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Distúrbios do Cálcio", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1FmDArV48SrTRFoQY30K9iMUPQ4Be9AAF/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Distúrbios do Cálcio", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1m2iWRu6ru0nPBxoUTVcOFPoMsS4adHwy/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Distúrbios do Calcio", pdfLink: "https://drive.google.com/file/d/1xhSVSuI61CdhjtT4l1FGdqozKFZIUpg6/view?usp=sharing" },
          { title: "PDF de Slides - Distúrbios do Calcio", pdfLink: "https://drive.google.com/file/d/1Nl_J3yfebV8SKgTs7l8_YIq5k3J4PGDH/view?usp=sharing" }
        ]
      },
      {
        id: 13,
        label: "Sub-Módulo 13",
        title: "Distúrbios Hidroeletrolíticos Outros (Magnésio e Fósforo)",
        imageUrl: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Distúrbios Hidroeletrolíticos - Outros", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/18mUmKCQ0iI_wuSCFddqBPEwC5oHaTIk5/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Distúrbios Hidroeletrolíticos: Outros", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1O3oUbmsiuVEeYPeEZ6IY9t1YVcIwIKK4/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Distúrbios Hidroeletrolíticos: Outros", pdfLink: "https://drive.google.com/file/d/1aNNDwKmCJVBxqNHlkQBCX8WEnnxuvg9y/view?usp=sharing" },
          { title: "PDF de Slides - Distúrbios Hidroeletrolíticos: Outros", pdfLink: "https://drive.google.com/file/d/1cMeVoKVXcA2QeLmvTZ8Z8YEH5zs9m3hs/view?usp=sharing" }
        ]
      },
      {
        id: 16,
        label: "Sub-Módulo 16",
        title: "Discussão R+ Nefrologia - Módulo 2",
        imageUrl: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Discussão R+ Nefrologia - Módulo 2_COFEXPRESS", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/142SvfeYxhJLn0MxelkAl9NZMAkhaStp_/view?usp=sharing" },
          { id: 2, title: "Discussão R+ Nefrologia - Módulo 2", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/14EVNZDWG5G8LONlHbsiSTeSr7KtRea-J/view?usp=sharing" }
        ],
        materials: []
      }
    ]
  },
  // --- MÓDULO 15: ONCOLOGIA ---
  {
    id: 15,
    title: "Módulo 15 - Oncologia",
    label: "Módulo 15",
    subModules: [
      {
        id: 1,
        label: "Sub-Módulo 1",
        title: "Cuidados Paliativos",
        imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Cuidados Paliativos", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/11sI89D2Dqn3o_4epctqOO6dwG0dLoYEV/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Cuidados Paliativos", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1Nokq7vcZa5TcjxRW3aRVJNx4Bh232J8C/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Cuidados Paliativos", pdfLink: "https://drive.google.com/file/d/1i7OOoQB2FjiQTBefypVPFkuSuHJff5hG/view?usp=sharing" },
          { title: "PDF de Slides - Cuidados Paliativos", pdfLink: "https://drive.google.com/file/d/1O5XtBOAwN8QroAWcy0ZrYDk436ADonHJ/view?usp=sharing" }
        ]
      },
      {
        id: 2,
        label: "Sub-Módulo 2",
        title: "Neoplasias Específicas e Miscelânea",
        imageUrl: "https://images.unsplash.com/photo-1579165466741-7f35a4755657?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Neoplasias Específicas", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1XghcooTiTKxyWHRqYUgUfNfXM0O07xcM/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Neoplasias Específicas", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1O3VoC4Vqhr8FHPXTVWSZoEO1jrjyOKWa/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Neoplasias Específicas", pdfLink: "https://drive.google.com/file/d/1ZhkI5427fJW4-h_cFRXwRVmiWtuUjhU4/view?usp=sharing" },
          { title: "PDF de Slides - Neoplasias Específicas", pdfLink: "https://drive.google.com/file/d/1JAzP7x0EQWS5VvVIATcSSaoWY2gwY5d0/view?usp=sharing" }
        ]
      },
      {
        id: 3,
        label: "Sub-Módulo 3",
        title: "Emergências Oncológicas",
        imageUrl: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Emergências Oncológicas", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1Of16_l9MZHS74CU-aWiLRq3j0BOwbwPD/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Emergências Oncológicas", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1agyT3sTObjJtUxaILEHfdlh0SIe_xC1F/view?usp=sharing" }
        ],
        materials: [
          { title: "Errata - Emergências Oncológicas", pdfLink: "https://drive.google.com/file/d/1U5nmMtCPySLkIy2TIm_FlnyG510Aotzl/view?usp=sharing" },
          { title: "Ficha Resumo - Emergências Oncológicas", pdfLink: "https://drive.google.com/file/d/1traxvMnafhc1SunMoth3Lo3-g4mUNttX/view?usp=sharing" },
          { title: "PDF de Slides - Emergências Oncológicas", pdfLink: "https://drive.google.com/file/d/1sQeTzAEelumIdnOtOBsZWd6v2QVrsIeq/view?usp=sharing" }
        ]
      },
      {
        id: 4,
        label: "Sub-Módulo 4",
        title: "Efeitos colaterais de quimioterápicos",
        imageUrl: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Efeitos colaterais de quimioterápicos", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1JyAPgJs4HCfI4bMTGZg9DFg9wUqafNgf/view?usp=sharing" },
          { id: 2, title: "Efeitos colaterais de quimioterápicos_COFEXPRESS", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1KSsFZqk_2ecSgDWkdYXcDwK22Bgx4xq4/view?usp=sharing" }
        ],
        materials: [
          { title: "PDF de slides - Efeitos colaterais de quimioterapicos.pdf", pdfLink: "https://drive.google.com/file/d/1kJFN-Oh_3i07AGtRurVay7WK0w9kQ-O5/view?usp=sharing" }
        ]
      }
    ]
  },

  // --- MÓDULO 16: GERIATRIA ---
  {
    id: 16,
    title: "Módulo 16 - Geriatria",
    label: "Módulo 16",
    subModules: [
      {
        id: 1,
        label: "Sub-Módulo 1",
        title: "Introdução à Geriatria",
        imageUrl: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Introdução à Geriatria", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1h-q3abFiyXwTmYW8EhT27Q9EoZQSWHKb/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Introdução à Geriatria", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1YpGDhcwP7cswYNK3xlmSo6-I2nH4Zghg/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Introdução à Geriatria", pdfLink: "https://drive.google.com/file/d/1NCTgJeMkvpak7cW_rRk8jJS49qnO_0BK/view?usp=sharing" },
          { title: "PDF de Slides - Introdução à Geriatria", pdfLink: "https://drive.google.com/file/d/17wo_RbT0hDqzIDKIEagmcB_GWetFSrt8/view?usp=sharing" }
        ]
      },
      {
        id: 2,
        label: "Sub-Módulo 2",
        title: "Avaliação Geriátrica Ampla",
        imageUrl: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Avaliação Geriátrica Ampla", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/15ODILI_4Z8tmG9zF0Y_cmdvrg2tlkA0B/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Avaliação Geriátrica Ampla", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1ep2mmddxV-GTMNIeWDeOkmct6LhgVk85/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Avaliação Geriátrica Ampla", pdfLink: "https://drive.google.com/file/d/1SXFJOPingaDxQZWi26pm9dTRIYhSh0-l/view?usp=sharing" },
          { title: "Errata - Ficha Resumo: Avaliação Geriátrica Ampla", pdfLink: "https://drive.google.com/file/d/1zgVfbLnqCdLWStRxxLo_cpCvvRirHLu0/view?usp=sharing" },
          { title: "PDF de Slides - Avaliação Geriátrica Ampla", pdfLink: "https://drive.google.com/file/d/1juTmt0DnlxDTNEoPdBOxWNsMHwN9unMI/view?usp=sharing" }
        ]
      },
      {
        id: 3,
        label: "Sub-Módulo 3",
        title: "Fragilidade",
        imageUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Fragilidade", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1CVtZQx8BWcc-pxXpndlYOfg28AsT_jGf/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Fragilidade", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1_lq8XQxlYCnR0K3OU64DqEjtppzisY7g/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Fragilidade", pdfLink: "https://drive.google.com/file/d/1knXVoMMqE-aLAttZjKTuuj3nL_rwUOVr/view?usp=sharing" },
          { title: "PDF de Slides - Fragilidade", pdfLink: "https://drive.google.com/file/d/1y7I3UZDl1kOYLUEIVlj2JV_zq20keSLH/view?usp=sharing" }
        ]
      },
      {
        id: 4,
        label: "Sub-Módulo 4",
        title: "Instabilidade Postural, Quedas e Imobilidade",
        imageUrl: "https://images.unsplash.com/photo-1542736667-069246bdbc6d?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Instabilidade Postural, Quedas e Imobilidade", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1gGZIk1vcseVuqTcUiWuFkAagyNjntQGn/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Instabilidade Postural, Quedas e Imobilidade", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/12R2mX4b7zY6fgdMr3JG_0bYMU_YqHhv3/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Instabilidade Postural, Quedas e Imobilidade", pdfLink: "https://drive.google.com/file/d/1YgqUpcidicTofn0bKcUPxIrFBLV3-LDV/view?usp=sharing" },
          { title: "PDF de Slides - Instabilidade Postural, Quedas e Imobilidade", pdfLink: "https://drive.google.com/file/d/1kMNdEnhzu67O3r5JRAn7tu8v4AtEyBbF/view?usp=sharing" }
        ]
      },
      {
        id: 5,
        label: "Sub-Módulo 5",
        title: "Incontinência Urinária no Idoso",
        imageUrl: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Incontinência Urinária no Idoso", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1d8wO_zV6__W2yxsXbykzdNrJg2uu4DmE/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Incontinência Urinária no Idoso", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1XHS6fi9CQMAhmOKdtqKKa2pMwrOTv3-1/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Incontinência Urinária no Idoso", pdfLink: "https://drive.google.com/file/d/1Ap1NALjwWqBMg-FWFhk6ljkWknNn_7fB/view?usp=sharing" },
          { title: "PDF de Slides - Incontinência Urinária no Idoso", pdfLink: "https://drive.google.com/file/d/1qt24H29hoZM4-M3WvpTZq5s2XpDfWqJO/view?usp=sharing" }
        ]
      },
      {
        id: 6,
        label: "Sub-Módulo 6",
        title: "Insuficiência Cognitiva: Delirium no Idoso",
        imageUrl: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Insuficiência Cognitiva - Delirium no Idoso", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1ECZYlMV3Qrszo8Rr7XkgYEzI7cqXKLwm/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Insuficiência Cognitiva: Delirium no Idoso", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1kyiLqHZ5ji8_U64zYEdsKLpXbUEhPLF1/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Insuficiência Cognitiva: Delirium no Idoso", pdfLink: "https://drive.google.com/file/d/1Dw28xGE8ZbQin5mg2Tugi7uXu39H-2Xt/view?usp=sharing" },
          { title: "PDF de Slides - Insuficiência Cognitiva: Delirium no Idoso", pdfLink: "https://drive.google.com/file/d/1b9pWI_2sGq_9m3PjiYKnHBorrT-jIAEK/view?usp=sharing" }
        ]
      },
      {
        id: 7,
        label: "Sub-Módulo 7",
        title: "Insuficiência Cognitiva: Demências",
        imageUrl: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Insuficiência Cognitiva - Demências", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1oBDralECNPZnWjgg92iiU-SRwlva_SE6/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Insuficiência Cognitiva: Demências", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/11kFT5yoTuV2OsnREIUYFxuWVmjlphS5l/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Insuficiência Cognitiva: Demências", pdfLink: "https://drive.google.com/file/d/1cJKr6A-sUrPxc3YQITM89BghQNpHvL-v/view?usp=sharing" },
          { title: "PDF de Slides - Insuficiência Cognitiva: Demências", pdfLink: "https://drive.google.com/file/d/1vd5pLUpcfrClsrV-MOHG-LrYmy4mrl6V/view?usp=sharing" }
        ]
      },
      {
        id: 8,
        label: "Sub-Módulo 8",
        title: "Depressão no Idoso",
        imageUrl: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Depressão no Idoso", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1pnfazZaGZzEAZax6Prn79xr__YYrUtVq/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Depressão no Idoso", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1OafyqiRysd5RJXuDa0dcol9T0csbSozs/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Depressão no Idoso", pdfLink: "https://drive.google.com/file/d/1dNNhMKDZefNCqGh8pOzXbrBRwkzs7Skg/view?usp=sharing" },
          { title: "PDF de Slides - Depressão no Idoso", pdfLink: "https://drive.google.com/file/d/1GxvfqG_dLlbzbzPtkNPeD1nXf7XD0gzb/view?usp=sharing" }
        ]
      },
      {
        id: 9,
        label: "Sub-Módulo 9",
        title: "Vacinação do Idoso",
        imageUrl: "https://images.unsplash.com/photo-1632053002928-19349c259740?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Vacinação do Idoso", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1Qck9FBCTFHyCUx1MVJ4r_ACl5jmHet2e/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Vacinação do Idoso", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1O0NaX_ajZU4g3U3rYnmhfH62-b4jevva/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Vacinação do Idoso", pdfLink: "https://drive.google.com/file/d/1baeutTr7S8MdBY3Of8cCMrVyvU8j3l5S/view?usp=sharing" },
          { title: "PDF de Slides - Vacinação do Idoso", pdfLink: "https://drive.google.com/file/d/1JNcJcIUY9quAYeM126ux_T-hnfnysddy/view?usp=sharing" }
        ]
      },
      {
        id: 10,
        label: "Sub-Módulo 10",
        title: "Iatrogenia no Idoso",
        imageUrl: "https://images.unsplash.com/photo-1584036561566-b472f12e896f?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Iatrogenia no Idoso", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1ddDwNu8ZCD2sQJ7eiFDSgUrjOflqe0xG/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Iatrogenia no Idoso", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1SzBv__J2a19-0_bF4rwRgoE62qWuI-Id/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Iatrogenia no Idoso", pdfLink: "https://drive.google.com/file/d/1pJJ3JCm9CD9fOS5lG9n05KPReLFcJBK5/view?usp=sharing" },
          { title: "PDF de Slides - Iatrogenia no Idoso", pdfLink: "https://drive.google.com/file/d/1R-p7u6_yFWE00byPMkggDHcbNemmo148/view?usp=sharing" }
        ]
      },
      {
        id: 12,
        label: "Sub-Módulo 12",
        title: "Discussão R+ Geriatria - Módulo 2",
        imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=400",
        lessons: [],
        materials: [
          { title: "PDF de slides - Discussao R+_ Geriatria - Modulo 2.pdf", pdfLink: "https://drive.google.com/file/d/1fr-z1z88NkwA8eF_T9oupOGOJ5NlqHj1/view?usp=sharing" }
        ]
      }
    ]
  },

  // --- MÓDULO 17: PNEUMOLOGIA ---
  {
    id: 17,
    title: "Módulo 17 - Pneumologia",
    label: "Módulo 17",
    subModules: [
      {
        id: 1,
        label: "Sub-Módulo 1",
        title: "Espirometria",
        imageUrl: "https://images.unsplash.com/photo-1584362917165-52e812f8dc08?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Espirometria", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1EOmTLYIonOJXt2eCuU_xxIztoJ3QTcN3/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Espirometria", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1dH45y_Dq7rM5cm1um9blDNWVCPVTgMNB/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Espirometria", pdfLink: "https://drive.google.com/file/d/1b5sfG_NNHUBnH1CDiaG6fV0qnqgtZvi4/view?usp=sharing" },
          { title: "PDF de Slides - Espirometria", pdfLink: "https://drive.google.com/file/d/1Jm5vId533cvC4Rw1ynSSZIj2LkTxn5_y/view?usp=sharing" }
        ]
      },
      {
        id: 2,
        label: "Sub-Módulo 2",
        title: "Asma",
        imageUrl: "https://images.unsplash.com/photo-1628771065518-0d82f1938462?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Asma", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1QWPte-2jWo9ULqsccL4_bD5JozsqaWPM/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Asma", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1VYzaNUfWEHQx8lH9VNHdWnWDn2EBfvC-/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Asma", pdfLink: "https://drive.google.com/file/d/1jrNzvMqksMSwaZFkmgqQmhuQo9c5I_aQ/view?usp=sharing" },
          { title: "PDF de Slides - Asma", pdfLink: "https://drive.google.com/file/d/1mdVrZstggJsbv84GNkd0tGBQb4X5EqxU/view?usp=sharing" }
        ]
      },
      {
        id: 3,
        label: "Sub-Módulo 3",
        title: "Doença Pulmonar Obstrutiva Crônica (DPOC)",
        imageUrl: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: DPOC", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/18zY6RU1W9mQepkzaUQX8IhtWbBNpZOBw/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Doença Pulmonar Obstrutiva Crônica (DPOC)", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1lmgisEOeL8zGRCEBembSMbojpubdMkcU/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - DPOC", pdfLink: "https://drive.google.com/file/d/16zBqW3tF71gKY3PemszfPoW97rL2Ru0T/view?usp=sharing" },
          { title: "PDF de Slides - DPOC", pdfLink: "https://drive.google.com/file/d/1dKpvkfWWES-zDaU3HdKvzszLi9HFya8A/view?usp=sharing" }
        ]
      },
      {
        id: 4,
        label: "Sub-Módulo 4",
        title: "Pneumonia Adquirida na Comunidade",
        imageUrl: "https://images.unsplash.com/photo-1584036561566-b93a50208c3c?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: PAC", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1LN_BgeldZluM6K4H4x0D5cW6e0aGXdoG/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Pneumonia Adquirida na Comunidade", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1MezTa_gluRf8B0XyHpT6XLFBzyzeHYJj/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - PAC", pdfLink: "https://drive.google.com/file/d/1s9pYXIWwAwomD-s8C2oy87kUlcjW5Oyd/view?usp=sharing" },
          { title: "PDF de Slides - PAC", pdfLink: "https://drive.google.com/file/d/1TrXqah6YH2mrZ_eDaP3eyPa_g1jtnm3t/view?usp=sharing" }
        ]
      },
      {
        id: 5,
        label: "Sub-Módulo 5",
        title: "Derrame Pleural",
        imageUrl: "https://images.unsplash.com/photo-1559757175-577952467e38?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Derrame Pleural", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1kFTDVlZV9ufw7CXj5pJWyuuGLRewHo4k/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Derrame Pleural", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1KDNVHqYp9Gj7oqblyw90GKmGz3xNV4_g/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Derrame Pleural", pdfLink: "https://drive.google.com/file/d/1RKT-iG7i1CsvHgOjYSY1LXGeCU5kQW04/view?usp=sharing" },
          { title: "PDF de Slides - Derrame Pleural", pdfLink: "https://drive.google.com/file/d/1fr8mH_4Lfyxvn55NcQrFLf3UeEWc9eiP/view?usp=sharing" }
        ]
      },
      {
        id: 6,
        label: "Sub-Módulo 6",
        title: "Tabagismo",
        imageUrl: "https://images.unsplash.com/photo-1520206183501-b80df610434f?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Tabagismo", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/14jX9bBPxfupFlzHAgBaIxPE_1Gv0XIc0/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Tabagismo", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1xvmEpILvLy_ONZp6o4f9T10Lbo45wl25/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Tabagismo", pdfLink: "https://drive.google.com/file/d/13pE2mqBl4vABu09WU0QybPtrYfOcQpHT/view?usp=sharing" },
          { title: "PDF de Slides - Tabagismo", pdfLink: "https://drive.google.com/file/d/1XEpGhrLHQrgkfNalJgL7OgnAjcft2UHP/view?usp=sharing" }
        ]
      },
      {
        id: 7,
        label: "Sub-Módulo 7",
        title: "Doença Pulmonar Intersticial (DPI)",
        imageUrl: "https://images.unsplash.com/photo-1559757175-9e359c952155?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: DPI", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/13YRNkGlvEG9BfTsDQa_DdkhUC2Fno_YA/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Doença Pulmonar Intersticial (DPI)", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1nqyoaazdH1Qm37q9fVxjEGCY2opr2oGO/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - DPI", pdfLink: "https://drive.google.com/file/d/1a6Y4E61pxy-9WIb22Ji2pcZw6QJujl_i/view?usp=sharing" },
          { title: "PDF de Slides - DPI", pdfLink: "https://drive.google.com/file/d/1Cq1EmHUVq6GPfbGP9SiXO_O8fqw16YLs/view?usp=sharing" }
        ]
      },
      {
        id: 8,
        label: "Sub-Módulo 8",
        title: "TEP",
        imageUrl: "https://images.unsplash.com/photo-1628352081506-83c43123ed6d?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: TEP", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1LoCOW6-UVd-IXpNZa48X74zzbPYsLbf3/view?usp=sharing" },
          { id: 2, title: "Aula 02 - TEP", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1KKfy7JCkwQJFrsy7YGy5j8d-eBkSuTDZ/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - TEP", pdfLink: "https://drive.google.com/file/d/1wrMZYZ2VtGlzt_JaeBjEZU5jsWHuOV_0/view?usp=sharing" },
          { title: "PDF de Slides - TEP", pdfLink: "https://drive.google.com/file/d/1sVoVM48HLFJcF35rSZpxdQ4oyDgJ699T/view?usp=sharing" }
        ]
      },
      {
        id: 9,
        label: "Sub-Módulo 9",
        title: "Hipertensão Pulmonar",
        imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Hipertensão Pulmonar", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1-dk6BlIxmQcsiBrUoHEZM9lHGMRPxr1Y/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Hipertensão Pulmonar", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1squ2WpP7E0G5RyEmq2x8TJTDY_OifhcK/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Hipertensão Pulmonar", pdfLink: "https://drive.google.com/file/d/1Vh05DxFAUQ6ITHDJvzUQXFG_whHDWpW0/view?usp=sharing" },
          { title: "PDF de Slides - Hipertensão Pulmonar", pdfLink: "https://drive.google.com/file/d/1H7q0XrwpeGd1puxVQAyFgp3tnIdNCyBh/view?usp=sharing" }
        ]
      },
      {
        id: 10,
        label: "Sub-Módulo 10",
        title: "Nódulo Pulmonar",
        imageUrl: "https://images.unsplash.com/photo-1584036561566-b93a50208c3c?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Nódulo Pulmonar", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/10EQuIewRz2sklGkyJRAlafz-4ss9vnvg/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Nódulo Pulmonar", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1JOKSZlmreXfu1iSalFHQoSh6DhjbUih9/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Nódulo Pulmonar", pdfLink: "https://drive.google.com/file/d/1z4HCwcClpwyZJUOqh3C0X4REQutumxeV/view?usp=sharing" },
          { title: "PDF de Slides - Nódulo Pulmonar", pdfLink: "https://drive.google.com/file/d/1dQpOcqhEVH6JtS6bUZfkQ4CClhd8_thP/view?usp=sharing" }
        ]
      },
      {
        id: 11,
        label: "Sub-Módulo 11",
        title: "Distúrbios do Sono",
        imageUrl: "https://images.unsplash.com/photo-1541781777621-0e8cc0e57b32?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Distúrbios do Sono", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1IqD1h0a7nGFNIi8nXO1Z9nZ_9Ny22qeX/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Distúrbios do Sono", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1A_PEf6ycyQrEBFo3ZBI-2QNz2ymEOMsa/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Distúrbios do Sono", pdfLink: "https://drive.google.com/file/d/1P4GzE0alMzHrhnJxsg313vpw0SZFU_e5/view?usp=sharing" },
          { title: "PDF de Slides - Distúrbios do Sono", pdfLink: "https://drive.google.com/file/d/1k7qlVj0JN3crq9km8GfF6J19Fot5U0SJ/view?usp=sharing" }
        ]
      },
      {
        id: 13,
        label: "Sub-Módulo 13",
        title: "Discussão R+ Pneumologia - Módulo 2",
        imageUrl: "https://images.unsplash.com/photo-1628595351029-c2bf17511435?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Discussão R+ Pneumologia - Módulo 2", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1GqO3GzhU0APlvBGO2fgOgnJSE6mRQxMd/view?usp=sharing" },
          { id: 2, title: "Discussão R+ Pneumologia - Módulo 2_COFEXPRESS", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1VW4lt15rGIhzohBIwn25IRpjxceEwuV_/view?usp=sharing" }
        ],
        materials: [
          { title: "PDF de slides - Discussao R+_ Pneumologia - Modulo 2.pdf", pdfLink: "https://www.google.com/search?q=https://drive.google.com/file/d/1zFoVkFJ1wf7Xx300eLO3AIKsmMzuAgDz/view%3Fusp%3Dsharing" }
        ]
      }
    ]
  },

  // --- MÓDULO 18: HEMATOLOGIA ---
  {
    id: 18,
    title: "Módulo 18 - Hematologia",
    label: "Módulo 18",
    subModules: [
      {
        id: 1,
        label: "Sub-Módulo 1",
        title: "Avaliação Global do Hemograma",
        imageUrl: "https://images.unsplash.com/photo-1615631648086-325cd3d0038c?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Avaliação Global do Hemograma", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1DicawxioCmRkzrTDR3KKtOTmnUYMcPSH/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Avaliação Global do Hemograma", pdfLink: "https://drive.google.com/file/d/1mCZFJHUU9OyZEXVca4teW7y9vchDEw_n/view?usp=sharing" },
          { title: "PDF de Slides - Avaliação Global do Hemograma", pdfLink: "https://drive.google.com/file/d/1UVintVyVFQzE9xZqAIh1a4hQXz3Km0mc/view?usp=sharing" }
        ]
      },
      {
        id: 2,
        label: "Sub-Módulo 2",
        title: "Anemias Hipoproliferativas I",
        imageUrl: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Anemias Hipoproliferativas I", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/16prMpbk8qyOv1eCK2Cp7s9swz9yOZdu6/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Anemias Hipoproliferativas I", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1zSZaz-Py85lNK6vgevRkw9ACmZUuQXBL/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Anemias Hipoproliferativas I", pdfLink: "https://drive.google.com/file/d/1Gee6QCCCayK8Q-om0C77eweE66bo0Ut-/view?usp=sharing" },
          { title: "PDF de Slides - Anemias Hipoproliferativas I", pdfLink: "https://drive.google.com/file/d/1paERnQQ1_ZfY4hdKXTH096F4fEx1S9mX/view?usp=sharing" }
        ]
      },
      {
        id: 3,
        label: "Sub-Módulo 3",
        title: "Anemias Hipoproliferativas II",
        imageUrl: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Anemias Hipoproliferativas II", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1h_QM0bxdTi12gNhNpQVa8I3V47ph1ngp/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Anemias Hipoproliferativas II", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/16kmAYsyPCKDPas_ERA8IUxeG76Bkaoe4/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Anemias Hipoproliferativas II", pdfLink: "https://drive.google.com/file/d/1hfj6R0nRXVA_zjZMRKxIwRXzL4_u8OoG/view?usp=sharing" },
          { title: "PDF de Slides - Anemias Hipoproliferativas II", pdfLink: "https://drive.google.com/file/d/1JCjiRjg99UwLMxIR-wgnucUTz-pCDs54/view?usp=sharing" }
        ]
      },
      {
        id: 5,
        label: "Sub-Módulo 5",
        title: "Anemias Hemolíticas Adquiridas",
        imageUrl: "https://images.unsplash.com/photo-1582719471384-3870695d9871?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Anemias Hemolíticas Adquiridas", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1D55i5SbhG-S7JyLcCcPKQVyZ54gENY_5/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Anemias Hemolíticas Adquiridas", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/12cCQopuf2Fl1Qc_edLlsojIlDJH3uJcH/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Anemias Hemolíticas Adquiridas", pdfLink: "https://drive.google.com/file/d/1wNvGP_xxsDGK4adiNjeJkNHGFWTqaOyT/view?usp=sharing" },
          { title: "PDF de Slides - Anemias Hemolíticas Adquiridas", pdfLink: "https://drive.google.com/file/d/1zE3GlS0L6K7D5qbeC0Gy31jOqsvHCm66/view?usp=sharing" }
        ]
      },
      {
        id: 4,
        label: "Sub-Módulo 4",
        title: "Anemias Hemolíticas Hereditárias",
        imageUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Anemias Hemolíticas Hereditárias", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1bI0tuPSnxbMZwqHuBst_NwE29mLDPTZ4/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Anemias Hemolíticas Hereditárias", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1xpXqPfVD3e-y1yZhZhIHptXs98CUT_Eo/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Anemias Hemolíticas Hereditárias", pdfLink: "https://drive.google.com/file/d/12CZVn7aRxS1rwGOhmvpWb5_DPvJ0ZSEu/view?usp=sharing" },
          { title: "PDF de Slides - Anemias Hemolíticas Hereditárias", pdfLink: "https://drive.google.com/file/d/1C6ShvayIm8p780qSmCO7s4cKl8L66fQP/view?usp=sharing" }
        ]
      },
      {
        id: 10,
        label: "Sub-Módulo 10",
        title: "Púrpura Trombocitopênica Trombótica (PTT)",
        imageUrl: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: PTT", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1YZUzOV78cUEAR5QZfE6_2MBNd-SITuvq/view?usp=sharing" },
          { id: 2, title: "Aula 02 - PTT", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1bTaPD_-6BaDjCE_ri0fqLGhVDZFsMHsj/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - PTT", pdfLink: "https://drive.google.com/file/d/1PFBpyR3p1lV27LyidKiMWn-aBPlPK8ib/view?usp=sharing" },
          { title: "PDF de Slides - PTT", pdfLink: "https://drive.google.com/file/d/1Dxrc45YlWg9uY_HZBV4C_l9K_FO065Sv/view?usp=sharing" }
        ]
      },
      {
        id: 7,
        label: "Sub-Módulo 7",
        title: "Discussão R+ Hematologia - Módulo 1",
        imageUrl: "https://images.unsplash.com/photo-1576091160550-21733e99dbb9?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Discussão R+ Hematologia - Módulo 1", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1L65SJSa_KsB2vFCA4Ud3mlF6YfSHujca/view?usp=sharing" }
        ],
        materials: [
          { title: "PDF de slides - Discussao R+_ Hematologia - Modulo 1.pdf", pdfLink: "https://drive.google.com/file/d/1MBUgVch3M2arXJKKwKN6CeGcngyXxtFp/view?usp=sharing" }
        ]
      },
      {
        id: 8,
        label: "Sub-Módulo 6",
        title: "Fisiologia da Coagulação",
        imageUrl: "https://images.unsplash.com/photo-1628352081506-83c43123ed6d?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Fisiologia da Coagulação", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/14szTJOLL44bzPk5FMOllIaZxsfY0Ha3X/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Fisiologia da Coagulação", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1xt6mho7uuQp2xVRWNVfw4iVEMs-umo8W/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Fisiologia da Coagulação", pdfLink: "https://drive.google.com/file/d/1uG5vY5ST_Q9X20tVNc-4EA8T1odmJxyY/view?usp=sharing" },
          { title: "PDF de Slides - Fisiologia da Coagulação", pdfLink: "https://drive.google.com/file/d/1vTVksWIcRbDNkhcPFJI3MSpy_dvJ1Bev/view?usp=sharing" }
        ]
      },
      {
        id: 9,
        label: "Sub-Módulo 9",
        title: "Distúrbios da Hemostasia",
        imageUrl: "https://images.unsplash.com/photo-1559757175-9e359c952155?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Distúrbios da Hemostasia", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1lmOchdaUR43VuNrSLjQwpFiyZ7na5I5R/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Distúrbios da Hemostasia", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1u1gkfCA9iCdAicBYilC0_f6v0zQWj7Xx/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Distúrbios da Hemostasia", pdfLink: "https://drive.google.com/file/d/1IvquhKsLrw5wvkEzMFTtlhZ-ivoht_TS/view?usp=sharing" },
          { title: "PDF de Slides - Distúrbios da Hemostasia", pdfLink: "https://drive.google.com/file/d/1-t8W0FbpYwa7dUlonLg023hP3E0ARG0J/view?usp=sharing" }
        ]
      },
      {
        id: 10,
        label: "Sub-Módulo 15",
        title: "Hemoterapia",
        imageUrl: "https://images.unsplash.com/photo-1554672408-0e31e64df223?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Hemoterapia", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1H7hgBy1gYm2IMnB_jkV1uzCaU919j19X/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Hemoterapia", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1gcIDYk1AHvdUjUyvJ1EKWfP_T9fwrwEi/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Hemoterapia", pdfLink: "https://drive.google.com/file/d/131FFF1ITC78_4ND0kdvl8BeRA9VSxZRp/view?usp=sharing" },
          { title: "PDF de Slides - Hemoterapia", pdfLink: "https://drive.google.com/file/d/1k5ZUiQdFVIB0URXJwWRaHJjNYoiBFu_I/view?usp=sharing" }
        ]
      },
      {
        id: 11,
        label: "Sub-Módulo 11",
        title: "Anticoagulação I",
        imageUrl: "https://images.unsplash.com/photo-1579684453423-f84349ef60b0?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Anticoagulação I", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1Mbr2pIqrRzgGFHfKSq2BXXOjQz-pFhPy/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Anticoagulação I", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1XkVBRjOILv7QedIvQYH1MYM1EjLqvxb7/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Anticoagulação I", pdfLink: "https://drive.google.com/file/d/1STMjzk163ynhF-plW7gCJGgp_Qh0Ie5V/view?usp=sharing" },
          { title: "PDF de Slides - Anticoagulação I", pdfLink: "https://drive.google.com/file/d/1gB9uIJ8xGvwB9KsDQSDDB0h9LQMLLF0Z/view?usp=sharing" }
        ]
      },
      {
        id: 12,
        label: "Sub-Módulo 12",
        title: "Anticoagulação II",
        imageUrl: "https://images.unsplash.com/photo-1628352081506-83c43123ed6d?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Anticoagulação II", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1apAmhR_tDGq_VVWMuTTS8uulO95IJmUk/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Anticoagulação II", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/17YmBrJIVrysQzrzJEEodVulEQXaDhAiN/view?usp=sharing" }
        ],
        materials: [
          { title: "PDF de Slides - Anticoagulação II", pdfLink: "https://drive.google.com/file/d/1550k8weLdMjBZHeq2aEkGXNXD5hrbGRy/view?usp=sharing" }
        ]
      },
      {
        id: 13,
        label: "Sub-Módulo 13",
        title: "Discussão R+ Hematologia - Módulo 2",
        imageUrl: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Discussão R+ Hematologia - Módulo 2", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1D580iaskFvjzxrwAaD4Ol88zAfoxC4vT/view?usp=sharing" }
        ],
        materials: [
          { title: "PDF de slides - Discussao R+_ Hematologia - Modulo 2.pdf", pdfLink: "https://drive.google.com/file/d/19up1gITulgIo_w7qlRmBe1sd_oNVQd61/view?usp=sharing" }
        ]
      },
      {
        id: 14,
        label: "Sub-Módulo 14",
        title: "Leucemias",
        imageUrl: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Leucemias", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1X_yLXpUVXdnHryb1fNHpHT7EIZ5mMEmd/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Leucemias", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1ZTeDyr0RjlNIC4RnLWreQPbJ0h6IGWCE/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Leucemias: Básico", pdfLink: "https://drive.google.com/file/d/1-C9Xm3s-GYS18UDjoG1d0Q-B1mAlHS1Z/view?usp=sharing" },
          { title: "Ficha Resumo - Leucemias: Avançado", pdfLink: "https://drive.google.com/file/d/1PZdRmjg93nTXH_0iZEkGIV5xdgUJlwNm/view?usp=sharing" },
          { title: "PDF de Slides - Leucemias", pdfLink: "https://drive.google.com/file/d/1-lOnRGq1gXVhfvbNeWFmj3eCbpoDgXMV/view?usp=sharing" }
        ]
      },
      {
        id: 15,
        label: "Sub-Módulo 15",
        title: "Linfomas",
        imageUrl: "https://images.unsplash.com/photo-1582719471384-3870695d9871?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Linfomas", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1hN1ftVRKnr3HmJtpyUY1ROsvNh_-Mo__/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Linfomas", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1QLX9cY00jaSDh35U_wwOdOObvC_QthGn/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Linfomas: Avançado", pdfLink: "https://drive.google.com/file/d/1BxassAJ4m4LLBPcbxdumbJQOBO9rTjzt/view?usp=sharing" },
          { title: "Ficha Resumo - Linfomas: Básico", pdfLink: "https://drive.google.com/file/d/1bLyhpy115lGWzA8pESUv90vvb7TaR5tH/view?usp=sharing" },
          { title: "PDF de Slides - Linfomas", pdfLink: "https://drive.google.com/file/d/1uEuLnmt22gKxBGJ6NRKjpv-Mmtp3Pf8r/view?usp=sharing" }
        ]
      },
      {
        id: 16,
        label: "Sub-Módulo 16",
        title: "Discrasias Plasmocitárias",
        imageUrl: "https://images.unsplash.com/photo-1615631648086-325cd3d0038c?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Discrasias Plasmocitárias", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1f1Unrv-FbJMOp5cPr1MBNH8n81fdfwAo/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Discrasias Plasmocitárias", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1VyG43p8nqBxKE-F-asC8Seu47p3mKfh/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Discrasias Plasmocitárias", pdfLink: "https://drive.google.com/file/d/1R-DM024Z1h_xstkPMYNAdecyxfAhzv/view?usp=sharing" },
          { title: "PDF de Slides - Discrasias Plasmocitárias", pdfLink: "https://drive.google.com/file/d/1uMaMKAdt1HJz8m8tHLNhvzfVy4nV8Q6H/view?usp=sharing" }
        ]
      },
      {
        id: 17,
        label: "Sub-Módulo 17",
        title: "Síndromes Medulares",
        imageUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Síndromes Medulares", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1N8I2gsPDDdGvUQ2aQEmEH7azmq98yDCW/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Síndromes Medulares", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1yTyLr59wvSdM29Fr1dkXIQ-vzuYRKHU6/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Síndromes Medulares", pdfLink: "https://drive.google.com/file/d/12KxqASBnPaDrkcKqR3MZ9vqI5mWKLfx0/view?usp=sharing" },
          { title: "PDF de Slides - Síndromes Medulares", pdfLink: "https://drive.google.com/file/d/1Ll7fmMSYDaQcLRh8rC4JXwfeeaRngEdR/view?usp=sharing" }
        ]
      },
      {
        id: 18,
        label: "Sub-Módulo 18",
        title: "Discussão R+ Hematologia - Módulo 3",
        imageUrl: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Discussão R+ Hematologia - Módulo 3", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1WBk73aT0hJ_eiW085dzA47u-yHBNbc5N/view?usp=sharing" }
        ],
        materials: [
          { title: "PDF de slides - Discussao R+_ Hematologia - Modulo 3.pdf", pdfLink: "https://www.google.com/search?q=https://drive.google.com/file/d/1tyohGQtzOhc_pxKfhL_Q-8iZolLch3GH/view%3Fusp%3Dsharing" }
        ]
      }
    ]
  },

  // --- MÓDULO 19: ENDOCRINOLOGIA (Continuação) ---
  {
    id: 19,
    title: "Módulo 19 - Endocrinologia",
    label: "Módulo 19",
    subModules: [
      {
        id: 1,
        label: "Sub-Módulo 1",
        title: "Fisiologia e Anatomia da Adrenal",
        imageUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Fisiologia e Anatomia da Adrenal - CofExpress", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1lE07PqX3vx-pEOO8EG7OpqeVVF4ix0cC/view?usp=sharing" },
          { id: 2, title: "Fisiologia e Anatomia da Adrenal", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1wcE1ycyDhKqqO7kvdnvqKQ8Snk_4idfZ/view?usp=sharing" }
        ],
        materials: [
          { title: "PDF de slides - Fisiologia e Anatomia da Adrenal.pdf", pdfLink: "https://drive.google.com/file/d/1jcDZkeAg5DBRfkQ1RN3UZOPGujWUSgcT/view?usp=sharing" },
          { title: "Ficha Resumo - Fisiologia e Anatomia da Adrenal.pdf", pdfLink: "https://www.google.com/search?q=https://drive.google.com/file/d/1zJ3lMnbFdFoA6T8fSi6QZ8ztd3kWYfbQ/view%3Fusp%3Dsharing" }
        ]
      }
    ]
  },
  // --- MÓDULO 20: DERMATOLOGIA ---
  {
    id: 20,
    title: "Módulo 20 - Dermatologia",
    label: "Módulo 20",
    subModules: [
      {
        id: 1,
        label: "Sub-Módulo 1",
        title: "Lesões Elementares",
        imageUrl: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Lesões Elementares", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1ZRNafUXDI8_KzpBZxXS7QydDL8sVnhCb/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Lesões Elementares", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1mh8xeZa0zDyRD_3X1wHZu34ISb93HplK/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Lesões Elementares", pdfLink: "https://drive.google.com/file/d/1k67l2wvEG4dHKMM52lS6W9JdGFwq23Pj/view?usp=sharing" },
          { title: "PDF de Slides - Lesões Elementares", pdfLink: "https://drive.google.com/file/d/1i5ku3Vg4dUUlwzATfCDUy0BCHdmVGNY7/view?usp=sharing" }
        ]
      },
      {
        id: 2,
        label: "Sub-Módulo 2",
        title: "Hanseníase",
        imageUrl: "https://images.unsplash.com/photo-1582719471384-3870695d9871?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Hanseníase", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1EHYkJt7HuIS483b8QbeVP6p9sYXQaHbZ/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Hanseníase", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1FwErE-mo8F8DTq4bNjIUBVOJ58BzZTrV/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Hanseníase", pdfLink: "https://drive.google.com/file/d/1iKVZfIwemv-ike1kDLyR_NLlAX-qwNnl/view?usp=sharing" },
          { title: "PDF de Slides - Hanseníase", pdfLink: "https://drive.google.com/file/d/1CCNajJH9biCKItcQdysjG2jTE_WPSp-P/view?usp=sharing" }
        ]
      },
      {
        id: 3,
        label: "Sub-Módulo 3",
        title: "Dermatoses Bolhosas",
        imageUrl: "https://images.unsplash.com/photo-1628595351029-c2bf17511435?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Dermatoses Bolhosas", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1RVj5XRWO0Y2TXPdmRrHoT4fagOyA8EHr/view?usp=sharing" },
          { id: 2, title: "Aula 02 - CofExpress: Dermatoses Bolhosas", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1AAapKPVNXJi78RqvESV0H6Uxwxf2hqLJ/view?usp=sharing" }
        ],
        materials: [
          { title: "PDF de slides - Dermatoses Bolhosas.pdf", pdfLink: "https://drive.google.com/file/d/1NzN52ty0tjZKF2-fWZG15T4FORHbK307/view?usp=sharing" },
          { title: "Ficha Resumo - Dermatoses Bolhosas.pdf", pdfLink: "https://drive.google.com/file/d/1iVGW7xmpD4yxiBmQKTAlIj83QVnhgdE3/view?usp=sharing" }
        ]
      },
      {
        id: 4,
        label: "Sub-Módulo 4",
        title: "Psoríase",
        imageUrl: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Psoríase", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1wt-nNjP9o1czBRJ1oaRp20v2Qq_ik86I/view?usp=drive_link" },
          { id: 2, title: "Aula 02 - Psoríase", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1YE_yiT5fPpYDxzBxTlC-61GJe8aEgw7x/view?usp=sharing" }
        ],
        materials: [
          { title: "PDF de slides - Psoriase.pdf", pdfLink: "https://www.google.com/search?q=https://drive.google.com/file/d/1u-XIW41tZe3HYHbt_hw5dnM73SHMmhui/view%3Fusp%3Dsharing" }
        ]
      }
    ]
  },

  // --- MÓDULO 21: PSIQUIATRIA ---
  {
    id: 21,
    title: "Módulo 21 - Psiquiatria",
    label: "Módulo 21",
    subModules: [
      {
        id: 1,
        label: "Sub-Módulo 1",
        title: "Transtorno de Humor I",
        imageUrl: "https://images.unsplash.com/photo-1493836512294-502baa1986e2?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Transtorno de Humor I", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1NqTAC4oZyZbKijxlK13nX3A1IU74y88u/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Transtorno de Humor I", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1MHIGY0swkXpUUGXtrnSBK9Ledwa031j3/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Transtorno de Humor I", pdfLink: "https://drive.google.com/file/d/1fremGCDNGhAfSUjPoHK7X3PX3YPxdpOy/view?usp=sharing" },
          { title: "PDF de Slides - Transtorno de Humor I", pdfLink: "https://drive.google.com/file/d/1Ts8cczgG2oQCBuH0Kql_I1n8dbAvKBAf/view?usp=sharing" }
        ]
      },
      {
        id: 2,
        label: "Sub-Módulo 2",
        title: "Transtorno de Humor II: Antidepressivos",
        imageUrl: "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Antidepressivos", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1S1yAv1rgKZX3pWYc_OySo5FWgyaJvm0J/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Transtorno de Humor II: Antidepressivos", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1f6oy0NKwdY9XvW-r_ZiKC9-Ek12govDs/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Antidepressivos", pdfLink: "https://drive.google.com/file/d/13_OXYhQnVQPRHp9ptHkL_LYUKlUCrkyh/view?usp=sharing" },
          { title: "PDF de Slides - Antidepressivos", pdfLink: "https://drive.google.com/file/d/1QslR_r4-mdNVzJS4PD4lWLK0pVN0eIgs/view?usp=sharing" }
        ]
      },
      {
        id: 3,
        label: "Sub-Módulo 3",
        title: "Transtorno de Humor III: Mania e Bipolar",
        imageUrl: "https://images.unsplash.com/photo-1559757175-9e359c952155?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Mania e Bipolar", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1tgEcI5_N6ad8lPHnW7zWiAJUwY3q7Hnz/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Transtorno de Humor III: Mania e Bipolar", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1ifR_whWxDrWjWIXVcB8M6abyTzaIaNM9/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Mania e Bipolar", pdfLink: "https://drive.google.com/file/d/1kx-nMesyBzVo5SbGdq0QWfHrqW2cMc8N/view?usp=sharing" },
          { title: "PDF de Slides - Mania e Bipolar", pdfLink: "https://drive.google.com/file/d/1jaQUWsFmwRNudVuHV_MTXo1anAK-qIEB/view?usp=sharing" }
        ]
      },
      {
        id: 4,
        label: "Sub-Módulo 4",
        title: "Transtorno de Ansiedade",
        imageUrl: "https://images.unsplash.com/photo-1581056771107-24ca5f037085?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Transtorno de Ansiedade", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1yOv6cu43d4UbJ-DaEZKtER1LszGSPDgE/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Transtorno de Ansiedade", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/10s6d0TFJLIVStUE2zYS2uDsuBqeaDCr_/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Transtorno de Ansiedade", pdfLink: "https://drive.google.com/file/d/1gA6ijEsWp5vosI9SDVuF7TTaGRXachfp/view?usp=sharing" },
          { title: "PDF de Slides - Transtorno de Ansiedade", pdfLink: "https://drive.google.com/file/d/10zMs3WU6oZqS1O833_jrGhy2jsmo8h_N/view?usp=sharing" }
        ]
      },
      {
        id: 5,
        label: "Sub-Módulo 5",
        title: "Transtorno Psicótico",
        imageUrl: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Transtorno Psicótico", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1-QrpBdBqNlCYlMZ_fnrZUJVNDyeDiXOU/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Transtorno Psicótico", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1vw0sLfYAt6ozMcaT6hF4jHoKpPHYQnfR/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Transtorno Psicótico", pdfLink: "https://drive.google.com/file/d/12ntqH-kD9RoyTbLOmthG4wBLpPRxnG6e/view?usp=sharing" },
          { title: "PDF de Slides - Transtorno Psicótico", pdfLink: "https://drive.google.com/file/d/1C_Uf77MjrJDJ0sJ0XJ7bEr5D_i5T1OkP/view?usp=sharing" }
        ]
      },
      {
        id: 6,
        label: "Sub-Módulo 6",
        title: "Transtornos Relacionados a Substâncias - Álcool",
        imageUrl: "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Substâncias - Álcool", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1Njup8RnXGGH984A2YF14h_enBkP3setM/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Transtornos: Álcool", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1997HP50XOiPNrfuRaQ_oHabE5lsTwEP3/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Substâncias: Álcool", pdfLink: "https://drive.google.com/file/d/1Ov3X-rDyTNyNzrHu0uo_5fzvFlorQ0R9/view?usp=sharing" },
          { title: "PDF de Slides - Substâncias: Álcool", pdfLink: "https://drive.google.com/file/d/1hbX2UdgIaB7NLleDfIO_JApK41Lyh2_k/view?usp=sharing" }
        ]
      }
    ]
  },

  // --- MÓDULO 22: OTORRINOLARINGOLOGIA ---
  {
    id: 22,
    title: "Módulo 25 - Otorrinolaringologia",
    label: "Módulo 25",
    subModules: [
      {
        id: 1,
        label: "Sub-Módulo 1",
        title: "Otologia I",
        imageUrl: "https://images.unsplash.com/photo-1583532452513-a02186582ccd?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Otologia I", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1Io4-jsXx9EZ3NSuBp-epqbmiMuOvHBgx/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Otologia I", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1ajX0_vAdOM14vzBZtSczp8dF3aB3VX95/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Otologia I", pdfLink: "https://drive.google.com/file/d/1izx5wdZdMvj4FhF9__QpD_77wqd5AMh7/view?usp=sharing" },
          { title: "PDF de Slides - Otologia I", pdfLink: "https://drive.google.com/file/d/12rAWqqcPvJIzXFDBFlcVT3MvNYDD087C/view?usp=sharing" }
        ]
      },
      {
        id: 2,
        label: "Sub-Módulo 2",
        title: "Otologia II",
        imageUrl: "https://images.unsplash.com/photo-1516574187841-693018954312?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - CofExpress: Otologia II", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1-VhPqt4gZl2R7PQRtKJgPadYMx7b0RKF/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Otologia II", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1qa8mOxZw9DewUGZIqPLNBws4jalapaEi/view?usp=sharing" }
        ],
        materials: [
          { title: "Ficha Resumo - Otologia II", pdfLink: "https://drive.google.com/file/d/1fNIkWVtvBMjW1qqfyE5zy-tWXCLdtBWg/view?usp=sharing" },
          { title: "PDF de Slides - Otologia II", pdfLink: "https://drive.google.com/file/d/1r4uV7rLqYi8J80ijfXDtBNW2YmvcjnmF/view?usp=sharing" }
        ]
      }
    ]
  },

  // --- MÓDULO 23: OFTALMOLOGIA ---
  {
    id: 23,
    title: "Módulo 23 - Oftalmologia",
    label: "Módulo 23",
    subModules: [
      {
        id: 1,
        label: "Sub-Módulo 1",
        title: "Oftamologia em doenças clínicas - parte I",
        imageUrl: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Oftamologia em doenças clínicas: parte I", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1afuQwQzrcNPBUIBXBG1GTaBgEaVEAH24/view?usp=drive_link" },
          { id: 2, title: "Aula 02 - CofExpress: Oftamologia em doenças clínicas - parte I", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1-sOk9Ji7Qlf6qsvPoC0wxKez83F5qBM1/view?usp=sharing" }
        ],
        materials: [
          { title: "PDF de slides - Oftamologia em doencas clinicas - parte I.pdf", pdfLink: "https://drive.google.com/file/d/1JYctr7q_hvV_IDCRqFN1GpNY6NC2pd-I/view?usp=sharing" },
          { title: "Ficha resumo - Oftamologia em doencas clinicas - parte I.pdf", pdfLink: "https://drive.google.com/file/d/1bDcOPr8M7u0jZ7EH770K-pRxA3Z-ffzY/view?usp=sharing" }
        ]
      },
      {
        id: 2,
        label: "Sub-Módulo 2",
        title: "Oftamologia em doenças clínicas - parte II",
        imageUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Oftamologia em doenças clínicas - parte II", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1rIwYNNoVl9uI3fZ66g7zidX6ky7hWjf6/view?usp=drive_link" },
          { id: 2, title: "Aula 02 - CofExpress: Oftamologia em doenças clínicas - parte II_COFEXPRESS", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1a8U_I5wuA53v3K7WW4ZTfPe4_J1nJTvv/view?usp=drive_link" }
        ],
        materials: [
          { title: "PDF de slides - Oftamologia em doencas clinicas - parte II.pdf", pdfLink: "https://drive.google.com/file/d/1d9SYevpkkcqbcrfMPr-xkVk36JZCBUrM/view?usp=drive_link" },
          { title: "Ficha resumo - Oftamologia em doencas clinicas - parte II.pdf", pdfLink: "https://drive.google.com/file/d/1sE_MzBeUxU5dwAm6glBOhEaj6wfZOnVL/view?usp=drive_link" }
        ]
      }
    ]
  }
];
