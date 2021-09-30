export default {
  projections: {
    MeetingplanE: {
      plandate: {
        __caption__: 'plandate'
      },
      meetingrequest: {
        __caption__: 'meetingrequest',
        requestdate: {
          __caption__: 'requestdate'
        },
        speaker: {
          __caption__: 'speaker',
          surname: {
            __caption__: 'surname'
          }
        },
        book: {
          __caption__: 'book',
          tittle: {
            __caption__: 'tittle'
          }
        }
      }
    },
    MeetingplanL: {
      plandate: {
        __caption__: 'plandate'
      }
    }
  },
  validations: {
    plandate: {
      __caption__: 'plandate'
    },
    meetingrequest: {
      __caption__: 'meetingrequest'
    }
  }
};
