import { Badge } from "@chakra-ui/react"; 
 
 interface Props{
    score: number;
 }
 
 const CriticScore = ({score}: Props) => {

    let color = score > 75? 'green' : score > 60? 'yellow' :''; 
  return (
    <Badge colorScheme={color} fontSize='13px' borderRadius='4px' padding={1}>{score}</Badge>
  )
}

export default CriticScore
