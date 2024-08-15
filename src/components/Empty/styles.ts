import { StyleSheet } from "react-native";
import { theme } from "../../Theme";

export const styles = StyleSheet.create({
  emptyContainer: {
   flex: 1,
   width: '100%',
   alignItems: "center",
    
   paddingHorizontal: 40,
   paddingVertical: 20,
   borderTopColor: theme.colors.base.gray400,
   borderTopWidth: 1,
  },
  image: {
    marginBottom: 16
  },
  emptyTextContainer: {
   
    width:'100%', 
    alignItems: 'center'
  },
  textBold: {
    
    fontSize: theme.font_size.md,
    color: theme.colors.base.gray300,
    fontFamily: theme.font_family.bold,
  },
  textRegular: {

    fontFamily: theme.font_family.regular,
  }
})