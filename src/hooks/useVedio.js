import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function useVedio() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [videos, setvideos] = useState([]);

  useEffect(() => {
    async function fetchVedio() {
      const db = getDatabase();
      const videosRef = ref(db, "videos");
      const videoQuary = query(videosRef, orderByKey());
      try {
        setError(false);
        setLoading(true);
        // database request
        const snapshot = await get(videoQuary);
        setLoading(false);
        if (snapshot.exists()) {
          setvideos((prev) => {
            return [...prev, ...Object.values(snapshot.val())];
          });
        } else {
          //
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
      }
    }
    fetchVedio();
  }, []);

  return {
    loading,
    error,
    videos,
  };
}
