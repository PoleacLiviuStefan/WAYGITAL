module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
   
    },
    keyframes:{
      showAnswer:{
        '0%':{
          height:"4.5rem"
        },
        '100%':{
          height:"10rem"
        }
      },
      showAnswerReverse:{
        '0%':{
          height:"10rem"
        },
        '100%':{
          height:"4.5rem"
        }
      },
      rotateArrow:{
        '0%':{
          rotate:"0deg"
        },
        '100%':{
          rotate:"90deg"
        }
      },
      rotateArrowReverse:{
        '0%':{
          rotate:"90deg"
        },
        '100%':{
          rotate:"0deg"
        }
      },
      selectOption:{
        '0%':{
          backgroundColor:"#FFFFFFF",
          color:"black"
        },
        '100%':{
          backgroundColor:"#323B4B",
          color:"white"
        }
      },
      selectOptionReverse:{
        '0%':{
          backgroundColor:"#323B4B",
          color:"white"
        },
        '100%':{
          backgroundColor:"#FFFFFF",
          color:"black"
        }
      },
        centerOption:{
        '0%':{
          backgroundColor:"#323B4B",
          
        },
        '100%':{
          backgroundColor:"#FFFFFF",
          
        }
      },
      centerOptionReverse:{
        '0%':{
          backgroundColor:"#FFFFFF",
          
        },
        '100%':{
          backgroundColor:"#323B4B",
         
        }
      },
      expand:{
        '0%':{
          scale:"1"
          
        },
        '100%':{
          scale:"1.2"
         
        }
      },
      expandReverse:{
        '0%':{
          scale:"1.2"
          
        },
        '100%':{
          scale:"1"
         
        }
      },
      transformColor:{
        '0%':{
          backgroundColor:"white"
          
        },
        '100%':{
          backgroundColor:"black"
         
        }
      },
      logoLoadingAnim:{
        '0%':{
          scale:".9"
          
        },
        "50%":{
          scale:"1.1"
        }
        ,
        '100%':{
          scale:"1"
         
        }
      },
      slideNavbar:{
        '0%':{
          top:"-10rem"
          
        },
    
        '100%':{
          top:"0"
         
        }
      },
    }
  },
  plugins: [],
}