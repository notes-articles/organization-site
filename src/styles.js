import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%) !important',
    minHeight: '100vh !important',
    padding: `${theme.spacing(4)} !important`,
  },
  sectionTitle: {
    marginBottom: `${theme.spacing(3)} !important`,
    fontWeight: 'bold !important',
    fontSize: '2.5rem !important',
    color: '#000 !important',
    textAlign: 'center !important',
  },
  searchContainer: {
    display: 'flex !important',
    justifyContent: 'center !important',
    marginBottom: `${theme.spacing(3)} !important`,
  },
  searchInput: {
    width: '50% !important',
    padding: `${theme.spacing(1)} !important`,
    fontSize: '1rem !important',
  },
  navButtons: {
    display: 'flex !important',
    justifyContent: 'center !important',
    marginBottom: `${theme.spacing(4)} !important`,
    '& > *': {
      margin: `${theme.spacing(1)} !important`,
    },
  },
  button: {
    textTransform: 'none !important',
  },
  card: {
    position: 'relative !important',
    backgroundColor: '#ffffff !important',
    borderRadius: '12px !important',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1) !important',
    transition: 'transform 0.3s, box-shadow 0.3s !important',
    '&:hover': {
      transform: 'translateY(-10px) !important',
      boxShadow: '0 16px 32px rgba(0,0,0,0.2) !important',
    },
    '&:hover $overlay': {
      opacity: '1 !important',
    },
    display: 'flex !important',
    flexDirection: 'column !important',
    width: '100% !important', // 确保宽度占满
    maxWidth: '600px !important', // 最大宽度
    margin: 'auto !important', // 居中显示
  },
  cardMedia: {
    height: '0 !important',
    paddingBottom: '34.4% !important', // 使用图片的宽高比（641/1863）
    backgroundSize: 'cover !important',
    backgroundPosition: 'center !important',
    borderTopLeftRadius: '12px !important',
    borderTopRightRadius: '12px !important',
  },
  cardContent: {
    textAlign: 'center !important',
    padding: `${theme.spacing(1)} !important`,
    display: 'flex !important',
    flexDirection: 'column !important',
    justifyContent: 'center !important',
  },
  cardTitle: {
    fontSize: '1.2rem !important',
    fontWeight: 'bold !important',
    marginBottom: `${theme.spacing(0.5)} !important`,
    whiteSpace: 'nowrap !important',
    overflow: 'hidden !important',
    textOverflow: 'ellipsis !important',
  },
  cardDescription: {
    fontSize: '0.9rem !important',
    color: '#555 !important',
    marginBottom: `${theme.spacing(0.5)} !important`,
    whiteSpace: 'nowrap !important',
    overflow: 'hidden !important',
    textOverflow: 'ellipsis !important',
  },
  cardButton: {
    textTransform: 'none !important',
    backgroundColor: '#3f51b5 !important',
    color: '#fff !important',
    '&:hover': {
      backgroundColor: '#303f9f !important',
    },
  },
  overlay: {
    position: 'absolute !important',
    top: '0 !important',
    bottom: '0 !important',
    left: '0 !important',
    right: '0 !important',
    height: '100% !important',
    width: '100% !important',
    backgroundColor: 'rgba(0,0,0,0.6) !important',
    color: 'white !important',
    display: 'flex !important',
    flexDirection: 'column !important',
    alignItems: 'center !important',
    justifyContent: 'center !important',
    opacity: '0 !important',
    transition: 'opacity 0.3s !important',
  },
  overlayButton: {
    textTransform: 'none !important',
    color: '#fff !important',
    borderColor: '#fff !important',
    padding: `${theme.spacing(1, 3)} !important`,
    borderRadius: '8px !important',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.2) !important',
    },
  },
}));

export default useStyles;
