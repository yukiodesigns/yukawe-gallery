import { useEffect, useState } from 'react';
import { projectStorage } from '../firebase/config';
import { projectFireStore, timestamp } from '../firebase/config';

const useStorage = (file) => {
   const [progress, setProgress] = useState(0);
   const [error, setError] = useState(null);
   const [url, setUrl] = useState(null);

   useEffect(() => {
    const storageRef = projectStorage.ref(file.name);
    const uploadTask = storageRef.put(file);
    const collectionRef = projectFireStore.collection('images')

    uploadTask.on('state_changed', 
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },  (err) => {
        setError(err);
      },  async () => {
        const url = await uploadTask.snapshot.ref.getDownloadURL();
        const createdAt = timestamp()
        collectionRef.add({url, createdAt:createdAt})
        setUrl(url);
      }
    );

    return () => uploadTask.cancel();
   }, [file]);

  return {progress, url, error};
}

export default useStorage;
