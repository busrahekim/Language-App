import SearchBar from "@/components/SearchBar";
import { useDebounce } from "@/hooks/useDebounce";
import { User, fetchUsers } from "@/utils/fetchUsers";
import { useEffect, useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";

const Friends = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  const debouncedSearch = useDebounce(search);

  useEffect(() => {
    const loadUsers = async () => {
      setLoading(true);

      const users = await fetchUsers(debouncedSearch);
      setUsers(users);

      setLoading(false);
    };

    loadUsers();
  }, [debouncedSearch]);

  return (
    <ScrollView>
      <SearchBar onChange={setSearch} />
      {loading && <Text>Loading...</Text>}
      {!loading &&
        users.map((user) => {
          return (
            <View
              className="flex-col border-gray-300 border justify-between rounded-md"
              key={user.id}
            >
              <View className="bg-neutral-50">
                <View className="flex flex-row p-2 items-center">
                  <Image
                    source={require("@/assets/images/profile2.jpg")}
                    className="w-14 h-14 rounded-full mr-2"
                  />
                  <View className="w-[65%]">
                    <Text className="text-lg font-semibold text-gray-700">
                      {user.name}
                    </Text>
                    <View className="flex flex-row"></View>
                  </View>
                </View>
              </View>
            </View>
          );
        })}
    </ScrollView>
  );
};

export default Friends;
