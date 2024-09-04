import { Button, Modal, ScrollView, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";

export default function Index() {
  const [visibility, setVisibility] = useState(false);

  return (
    <View className="w-full h-full bg-white flex justify-center items-center p-10">
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text className="text-md text-black">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam nihil
          ullam, porro suscipit excepturi soluta, error, tempore accusantium in
          consequuntur fugit nisi. Cupiditate natus enim velit est nisi, id
          repellendus? Sequi non vel facilis laborum assumenda sed sapiente
          numquam beatae expedita, asperiores eius quia tempore mollitia quo
          quos nesciunt molestias, veritatis officia hic molestiae saepe animi
          corrupti. Eos, qui dolores. Dolores quibusdam fugit repellendus atque
          distinctio dolorum cupiditate, itaque veritatis. Perspiciatis iste
          dicta nihil eveniet, enim ipsam! Delectus quis cumque iusto ut earum
          ullam fuga. Perspiciatis consequatur temporibus dignissimos quidem.
          Dolores quae omnis iste nam placeat cumque aut consequuntur ad
          molestias tenetur hic fugit, sit iure unde aliquam culpa, dicta
          officiis eum ducimus quas nulla quia? Nam fugiat beatae hic. Amet
          possimus facilis, reprehenderit autem veniam impedit minima culpa hic
          voluptatibus facere quae eveniet dolor, quam at doloribus beatae
          aperiam. Iusto, provident unde deserunt omnis et consectetur nulla
          molestias aperiam? Quibusdam soluta rerum dolores, ea, distinctio
          voluptatibus autem quam recusandae aut unde inventore repellendus,
          labore nemo ratione facere ex rem temporibus ipsum ullam officiis
          blanditiis ut sint iste. Quod, nesciunt. Recusandae modi numquam
          expedita reprehenderit impedit hic dolore facere earum natus sapiente
          suscipit, in aperiam repellat, quam tenetur accusantium sit distinctio
          explicabo saepe, dignissimos labore iste! Reprehenderit ab consequatur
          iusto? Quas voluptas voluptatem neque repellendus explicabo esse ipsam
          qui distinctio fugiat recusandae, aut, praesentium asperiores, impedit
          atque optio laudantium quisquam nihil id quia! Deserunt, quidem
          doloremque voluptates saepe veniam fugiat? Alias amet sint recusandae
          doloremque cupiditate minus in, iusto quisquam ducimus nisi quod
          veniam nesciunt reiciendis magnam incidunt vero saepe ipsa fugit
          repellendus labore. Accusamus sint aspernatur suscipit facere esse!
          Commodi perspiciatis odit quod deleniti, quibusdam ea vero minus
          tempore quasi quae perferendis eos! Officiis numquam rerum maiores,
          earum consectetur harum, eveniet voluptatum possimus qui aliquam
          suscipit laboriosam, libero ut.
        </Text>
        <Text className="text-md text-black mt-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam nihil
          ullam, porro suscipit excepturi soluta, error, tempore accusantium in
          consequuntur fugit nisi. Cupiditate natus enim velit est nisi, id
          repellendus? Sequi non vel facilis laborum assumenda sed sapiente
          numquam beatae expedita, asperiores eius quia tempore mollitia quo
          quos nesciunt molestias, veritatis officia hic molestiae saepe animi
          corrupti. Eos, qui dolores. Dolores quibusdam fugit repellendus atque
          distinctio dolorum cupiditate, itaque veritatis. Perspiciatis iste
          dicta nihil eveniet, enim ipsam! Delectus quis cumque iusto ut earum
          ullam fuga. Perspiciatis consequatur temporibus dignissimos quidem.
          Dolores quae omnis iste nam placeat cumque aut consequuntur ad
          molestias tenetur hic fugit, sit iure unde aliquam culpa, dicta
          officiis eum ducimus quas nulla quia? Nam fugiat beatae hic. Amet
          possimus facilis, reprehenderit autem veniam impedit minima culpa hic
          voluptatibus facere quae eveniet dolor, quam at doloribus beatae
          aperiam. Iusto, provident unde deserunt omnis et consectetur nulla
          molestias aperiam? Quibusdam soluta rerum dolores, ea, distinctio
          voluptatibus autem quam recusandae aut unde inventore repellendus,
          labore nemo ratione facere ex rem temporibus ipsum ullam officiis
          blanditiis ut sint iste. Quod, nesciunt. Recusandae modi numquam
          expedita reprehenderit impedit hic dolore facere earum natus sapiente
          suscipit, in aperiam repellat, quam tenetur accusantium sit distinctio
          explicabo saepe, dignissimos labore iste! Reprehenderit ab consequatur
          iusto? Quas voluptas voluptatem neque repellendus explicabo esse ipsam
          qui distinctio fugiat recusandae, aut, praesentium asperiores, impedit
          atque optio laudantium quisquam nihil id quia! Deserunt, quidem
          doloremque voluptates saepe veniam fugiat? Alias amet sint recusandae
          doloremque cupiditate minus in, iusto quisquam ducimus nisi quod
          veniam nesciunt reiciendis magnam incidunt vero saepe ipsa fugit
          repellendus labore. Accusamus sint aspernatur suscipit facere esse!
          Commodi perspiciatis odit quod deleniti, quibusdam ea vero minus
          tempore quasi quae perferendis eos! Officiis numquam rerum maiores,
          earum consectetur harum, eveniet voluptatum possimus qui aliquam
          suscipit laboriosam, libero ut.
        </Text>
        <View className="mt-2">
          <Button
            title="Click Now"
            color="#841584"
            onPress={() => setVisibility(true)}
          ></Button>
        </View>
      </ScrollView>
      <Modal visible={visibility}>
        <View className="bg-black p-6">
          <Text className="text-lg text-white">Text modal heading</Text>
          <Text className="text-sm text-white">Smaller text modal heading</Text>
          <Button title="Toggle back" color="black" onPress={() => setVisibility(false)}></Button>
        </View>
      </Modal>
      <StatusBar style="auto" />
    </View>
  );
}
