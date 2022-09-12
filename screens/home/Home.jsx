import { View, Image, Text, TouchableOpacity, ScrollView  } from "react-native";
import React from "react";
import Button from "../../components/Button";
import Input from "../../components/input";
import { Formik } from "formik";
import Card from "../../components/cards";

function Home({ navigation }) {
  const searchData = {
    searchInfo: "",
  };
  const cardHandler = () => {
    navigation.navigate('restaurants');
  };

  return (
    <ScrollView>
    <View className="flex-1 items-center space-y-6 px-3 py-9">
      <View>
        <Image
          className="w-44 h-40"
          source={require("../../assets/logo.png")}
        />
      </View>
      <View className="w-4/5">
        <Formik
          initialValues={searchData}
          onSubmit={(values) => {
            alert(JSON.stringify(values, null, 2));
            console.log("I'am pressed");
          }}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValue,
            values,
            touched,
            errors,
          }) => (
            <View onClick={handleSubmit}>
              <Input
                name="searchInfo"
                onChange={handleChange("searchInfo")}
                onBlur={handleBlur("searchInfo")}
                value={values.searchInfo}
                type="search"
                icon="search"
              />
            </View>
          )}
        </Formik>
      </View>
      <View className="w-full">
        <Text className="py-3 text-left">المطاعم</Text>
        <TouchableOpacity onPress={cardHandler}>
        <Card height={"h-40"}>
          <Image
            className="h-full w-full object-cover"
            source={require("../../assets/restaurants.jpg")}
          />
        </Card>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  );
}
export default Home;
