module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'underLine': "url('/public/Images/underLine.svg')",
        'sol':"url('/public/Images/SOL.svg')",
        'sal':"url('/public/Images/SAL.svg')",
      }
    },
    keyframes:{
      appear:{
        '0%':{
          opacity:"100%"
        },
        '100%':{
          opacity:"0"
        }
      },
      disappear:{
        '0%':{
          opacity:"0"
        },
        '100%':{
          opacity:"100%"
        }
      },
      showAnswer:{
        '0%':{
          height:"4rem"
        },
        '100%':{
          height:"14rem"
        }
      },
      showAnswerReverse:{
        '0%':{
          height:"14rem"
        },
        '100%':{
          height:"4.5rem"
        }
      },
      showAnswerMobile:{
        '0%':{
          height:"3.5rem"
        },
        '100%':{
          height:"14rem"
        }
      },
      showAnswerMobileReverse:{
        '0%':{
          height:"14rem"
        },
        '100%':{
          height:"3.5rem"
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
          scale:"1.2"
          
        },
      
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
      slideUnderLine:{
        '0%':{
          width:"0"
          
        },
    
        '100%':{
          width:"100%"
         
        }
      },
      unselectedBtn:{
        '0%':{
          color:"black"
        },
        '100%':{
          color:"#D1D5DB"
        }
      },
      unselectedBtnReverse:{
        '0%':{
          color:"#D1D5DB"
        },
        '100%':{
          color:"black"
        }
      },
      expandMenu:{
        '0%':{
          height:"0rem",
        },
        '100%':{
          height:"15rem"
        }
      },
      expandMenuReverse:{
        '0%':{
          height:"15rem"
        },
        '100%':{
          height:"0rem"
        }
      },
      animateLastTwo:{
        '0%':{
          marginTop:"-5rem"
        },
        '100%':{
          marginTop:"-1rem"
        }
      },
      animateFirstTow:{
        '0%':{
          marginBottom:"-5rem"
        },
        '100%':{
          marginBottom:"-1rem"
        }
      },
      animateBackgroundWhite:{
        '0%':{
          backgroundColor:"#1A1A1A"
        },
        '100%':{
          backgroundColor:"#F2F2F7"
        }
      },
      animateBackgroundBlack:{
        '0%':{
          backgroundColor:"#F2F2F7"
        },
        '100%':{
          backgroundColor:"#1A1A1A"
        }
      },
      contactBtn:{
        '0%':{
          backgroundColor:"linear-gradient(90deg, rgba(107,52,255,1) 0%, rgba(178,52,255,1) 100%)"
        },
        '100%':{
          backgroundColor:"linear-gradient(90deg, rgba(107,52,255,1) 0%, rgba(178,52,255,1) 17%)"
        }
      },
      phoneAnim:{
        '0%':{
          color:"#6C35FF"
        },
        '100%':{
          color:"8d63ff"
        }
      },
    }
  },
  plugins: [],
}