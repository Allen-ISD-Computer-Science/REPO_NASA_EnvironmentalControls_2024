import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

// Scale factor for responsive styling
const scaleFactor = Math.min(width / 1180, height / 820); // Adjust the reference dimensions as needed

export const TestStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f3', // Light blue background color
    padding: 20 * scaleFactor, // Scale padding
  },

  title: {
    fontSize: 24 * scaleFactor, // Scale font size
    fontWeight: 'bold',
    marginBottom: 20 * scaleFactor,
    color: '#333', // Dark gray text color
  },

  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20 * scaleFactor,
  },

  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5 * scaleFactor, // Scale border radius
    paddingHorizontal: 10 * scaleFactor,
    marginRight: 10 * scaleFactor,
    fontSize: 20 * scaleFactor, // Scale font size
    backgroundColor: '#fff', // White background color
  },

  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10 * scaleFactor,
    backgroundColor: '#fff', // White background color for task container
    padding: 10 * scaleFactor, // Scale padding
    borderRadius: 5 * scaleFactor, // Scale border radius
    elevation: 2, // Add elevation for a shadow effect (Android)
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 0.2, // Shadow opacity
    shadowRadius: 2, // Shadow radius
  },

  taskText: {
    flex: 1,
    fontSize: 20 * scaleFactor, // Scale font size
    color: '#333', // Dark gray text color
  },
  
  completedTask: {
    textDecorationLine: 'line-through',
    color: '#999', // Light gray text color
  },

  button: {
    fontSize: 20 * scaleFactor, // Scale font size
    paddingVertical: 8 * scaleFactor, // Scale padding vertically
    paddingHorizontal: 12 * scaleFactor, // Scale padding horizontally
    borderRadius: 5 * scaleFactor, // Scale border radius
    backgroundColor: '#007bff', // Blue button color
    color: '#fff', // White text color
    textAlign: 'center', // Center align text
    minWidth: 100 * scaleFactor, // Minimum width for button
  },

  removeButton: {
    backgroundColor: '#dc3545', // Red button color for remove button
    marginRight: 10,
  },

  editButton: {
    backgroundColor: '#ffc107', // Yellow button color for edit button
    marginRight: 10,
  },

  completeButton: {
    backgroundColor: '#28a745', // Green button color for complete button
    marginRight: 10,
  },

  incompleteButton: {
    backgroundColor: '#6c757d', // Gray button color for incomplete button
  },

  buttonText: {
    fontSize: 18 * scaleFactor,
  },

  saveButton: {
    fontSize: 20 * scaleFactor,
    paddingVertical: 8 * scaleFactor,
    paddingHorizontal: 12 * scaleFactor,
    borderRadius: 5 * scaleFactor,
    backgroundColor: '#28a745', // Green button color for Save button
    color: '#fff', // White text color
    textAlign: 'center', // Center align text
    minWidth: 100 * scaleFactor, // Minimum width for button
    marginRight: 10, // Margin between Save and Cancel buttons
  },

  cancelButton: {
    fontSize: 20 * scaleFactor,
    paddingVertical: 8 * scaleFactor,
    paddingHorizontal: 12 * scaleFactor,
    borderRadius: 5 * scaleFactor,
    backgroundColor: '#dc3545', // Red button color for Cancel button
    color: '#fff', // White text color
    textAlign: 'center', // Center align text
    minWidth: 100 * scaleFactor, // Minimum width for button
  },

  previousPageButton: {
    fontSize: 20 * scaleFactor, // Scale font size
    paddingVertical: 8 * scaleFactor, // Scale padding vertically
    paddingHorizontal: 12 * scaleFactor, // Scale padding horizontally
    borderRadius: 5 * scaleFactor, // Scale border radius
    backgroundColor: '#007bff', // Blue button color
    color: '#fff', // White text color
    textAlign: 'center', // Center align text
    minWidth: 100 * scaleFactor, // Minimum width for button
    width: 50,
  },
});
