import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput, AsyncStorage } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons'

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import api from '../../services/api';

import styles from './styles';
import { useFocusEffect } from '@react-navigation/native';

function TeacherList(){
  const [teachers, setTeachers] = useState([]);
  const [favorites, setFavorites] = useState<number[]>([]);

  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  const [isFiltersVisible, setIsFilterVisible] = useState(false);

  function loadFavorites(){
    AsyncStorage.getItem('favorites').then(response => {
      if(response){
        const favoriteTeachers = JSON.parse(response);
        const favoriteTeachersIds = favoriteTeachers.map((teacher: Teacher) => {
          return teacher.id
        })

        console.log(favoriteTeachersIds);
        
        setFavorites(favoriteTeachersIds);
      }
    });
  }
  
  useFocusEffect(
    React.useCallback(() => {
      loadFavorites();
    }, [])
  );

  async function handleFiltersSubmit(){
    const response = await api.get('classes', {
      params: {
        subject,
        week_day,
        time
      }
    })
    
    setIsFilterVisible(false);
    setTeachers(response.data);
  }

  function handleToggleFiltersVisible(){
    setIsFilterVisible(!isFiltersVisible);
  }

  return (
      <View style={styles.container} >
        <PageHeader
          title="Proffys disponíveis"
          headerRight={(
            <BorderlessButton onPress={handleToggleFiltersVisible}>
              <Feather name="filter" size={20} color="#fff" />
            </BorderlessButton>
          )}>
          { isFiltersVisible && (
            <View style={styles.searchForm}>
              <Text style={styles.label}>Matéria</Text>

              <TextInput
                style={styles.input}
                value={subject}
                onChangeText={text => setSubject(text)}
                placeholder="Qual a matéria?"
                placeholderTextColor="#c1bccc" />

              <View style={styles.inputGroup}>
                <View style={styles.inputBlock}>
                  <Text style={styles.label}>Dia da semana</Text>

                  <TextInput
                    style={styles.input}
                    value={week_day}
                    onChangeText={text => setWeekDay(text)}
                    placeholder="Qual o dia?"
                    placeholderTextColor="#c1bccc" />
                </View>

                <View style={styles.inputBlock}>
                  <Text style={styles.label}>Horário</Text>

                  <TextInput
                    style={styles.input}
                    value={time}
                    onChangeText={text => setTime(text)}
                    placeholder="Qual horário?"
                    placeholderTextColor="#c1bccc" />
                </View>
              </View>

              <RectButton onPress={handleFiltersSubmit} style={styles.submitButton}>
                <Text style={styles.submitButtonText}>Filtrar</Text>
              </RectButton>
            </View>
          )}
      </PageHeader>

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}>
        {teachers.map((teacher: Teacher) => {
          return (
            <TeacherItem
              key={teacher.id}
              teacher={teacher}
              favorited={favorites.includes(teacher.id)} />
          )
        })}
      </ScrollView>
    </View>
  );
}

export default TeacherList;