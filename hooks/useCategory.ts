import { useEffect, useState } from "react";
import { collection, getFirestore, onSnapshot } from "firebase/firestore";
import { FIRESTORE_DB } from "@/firebaseConfig";


export const useCategory = (title: string) => {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    const itemRef = collection(FIRESTORE_DB, title);
    const subscriber = onSnapshot(itemRef, {
      next: (snapshot) => {
        const temp: any[] = [];
        snapshot.docs.forEach((doc) => {
          temp.push({
            id: doc.id,
            ...doc.data(),
          });
        });

        setItems(temp);
      },
    });
    return () => subscriber();
  }, [title]);

  return items;
};
