import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ProjectDetailsScreen = () => {
  
  const [projectName, setProjectName] = useState('Project Name');
  const [projectDescription, setProjectDescription] = useState('');
  const [location, setLocation] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  // Sample team members data
  const teamMembers = [
    { id: 1, image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTYyMDF8MHwxfHNlYXJjaHwyMHx8cHJvZmlsZXxlbnwwfHx8fDE3NTczNDYxNDh8MA&ixlib=rb-4.1.0&q=80&w=1080' },
    { id: 2, image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTYyMDF8MHwxfHNlYXJjaHwyMHx8cHJvZmlsZXxlbnwwfHx8fDE3NTczNDYxNDh8MA&ixlib=rb-4.1.0&q=80&w=1080' },
    { id: 3, image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTYyMDF8MHwxfHNlYXJjaHwyMHx8cHJofZmlsZXxlbnwwfHx8fDE3NTczNDYxNDh8MA&ixlib=rb-4.1.0&q=80&w=1080' },
    { id: 4, image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTYyMDF8MHwxfHNlYXJjaHwyMHx8cHJvZmlsZXxlbnwwfHx8fDE3NTczNDYxNDh8MA&ixlib=rb-4.1.0&q=80&w=1080' },
    { id: 4, image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTYyMDF8MHwxfHNlYXJjaHwyMHx8cHJvZmlsZXxlbnwwfHx8fDE3NTczNDYxNDh8MA&ixlib=rb-4.1.0&q=80&w=1080' },
    
  ];

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView style={styles.container}>
          {/* Project Name Header */}
          <View style={styles.projectNameContainer}>
            <TextInput
              style={styles.projectNameInput}
              value={projectName}
              onChangeText={setProjectName}
              placeholder="Project Name"
              placeholderTextColor="#FFFFFFAA"
            />
          </View>

          {/* Project Description Section */}
          <View style={styles.sectionContainer}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Project Description</Text>
              <TouchableOpacity style={styles.addButton}>
              </TouchableOpacity>
            </View>
            <View style={styles.descriptionInputContainer}>
              <TextInput
                style={styles.descriptionInput}
                value={projectDescription}
                onChangeText={setProjectDescription}
                placeholder="Description..."
                multiline
                numberOfLines={6}
                textAlignVertical="top"
              />
            </View>
          </View>

          {/* Location Section */}
          <View style={styles.sectionContainer}>
            <View style={styles.locationRow}>
              <Text style={styles.sectionTitle}>Location</Text>
              <TouchableOpacity style={styles.locationButton}>
                <Ionicons name="location" size={24} color="#FFFFFF" />
              </TouchableOpacity>
            </View>
            <TextInput
              style={styles.textInput}
              value={location}
              onChangeText={setLocation}
              placeholder="Enter location"
            />
          </View>

          {/* Dates Section */}
          <View style={styles.sectionContainer}>
            <View style={styles.dateRow}>
              <Text style={styles.sectionTitle}>Start Date</Text>
              <TouchableOpacity style={styles.dateButton}>
                <Ionicons name="calendar" size={24} color="#38AB7F" />
              </TouchableOpacity>
            </View>
            <TextInput
              style={styles.textInput}
              value={startDate}
              onChangeText={setStartDate}
              placeholder="Select start date"
            />
            
            <View style={styles.dateRow}>
              <Text style={styles.sectionTitle}>End Date</Text>
              <TouchableOpacity style={styles.dateButton}>
                <Ionicons name="calendar" size={24} color="#38AB7F" />
              </TouchableOpacity>
            </View>
            <TextInput
              style={styles.textInput}
              value={endDate}
              onChangeText={setEndDate}
              placeholder="Select end date"
            />
          </View>

          {/* Team Section */}
          <View style={styles.sectionContainer}>
            <View style={styles.teamHeader}>
              <Text style={styles.sectionTitle}>Team</Text>
              <TouchableOpacity style={styles.addTeamButton}>
                <Ionicons name="add" size={24} color="#FFFFFF" />
              </TouchableOpacity>
            </View>
            
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.teamScrollView}>
              {teamMembers.map((member) => (
                <View key={member.id} style={styles.teamMember}>
                  <Image source={{ uri: member.image }} style={styles.teamMemberImage} />
                </View>
              ))}
            </ScrollView>
          </View>
        </ScrollView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F5F5F5', // Secondary color
  },
  container: {
    flex: 1,
    padding: 5,
  },
  projectNameContainer: {
    height: 129,
    backgroundColor: '#38AB7F', // Primary color
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 25,
    marginBottom: 20,
  },
  projectNameInput: {
    color: '#FFFFFF', // Tertiary color
    fontSize: 20,
    fontWeight: '500',
    fontFamily: 'Inter',
  },
  sectionContainer: {
    backgroundColor: '#FFFFFF', // Tertiary color
    borderRadius: 8,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    color: '#38AB7F', // Primary color
    fontSize: 18,
    fontWeight: '500',
    fontFamily: 'inter',
  },
  addButton: {
    padding: 5,
  },
  descriptionInputContainer: {
    minHeight: 150,
    backgroundColor: '#F8F9FA', // Secondary background
    borderRadius: 4,
    padding: 10,
  },
  descriptionInput: {
    textAlignVertical: 'top',
    fontSize: 14,
  },
  locationRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  locationButton: {
    width: 45,
    height: 45,
    borderRadius: 24,
    backgroundColor: '#38AB7F', // Primary color
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 15,
  },
  dateButton: {
    padding: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 4,
    padding: 10,
    fontSize: 16,
  },
  teamHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  addTeamButton: {
    width: 45,
    height: 45,
    borderRadius: 24,
    backgroundColor: '#38AB7F', // Primary color
    justifyContent: 'center',
    alignItems: 'center',
  },
  teamScrollView: {
    marginHorizontal: -5,
  },
  teamMember: {
    marginHorizontal: 5,
  },
  teamMemberImage: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
  },
});

export default ProjectDetailsScreen;