# Why do the names not render correctly? 

## Wrong separator structure

The list of names needs to follow the structure 

FULL NAME + SEPARATOR + FULL NAME + SEPARATOR + FULL NAME ...

If a separator is missing, the name cannot be parsed correctly. 
E.g. the following would not work:
 
`Yousef, H., Alhajj, M., Fakoya AO, et al.`

But this would: 

`Yousef, H., Alhajj, M., Fakoya, AO, et al.`