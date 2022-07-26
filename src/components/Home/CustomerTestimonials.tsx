import SectionHeader from '@components/Common/SectionHeader';
import styled from '@emotion/styled';
import React from 'react';
import TestimonialItem from './TestimonialItem';

const CustomerContainer = styled.div``;

const Testimonials = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const CustomerTestimonials = () => {
  const sectionHeader = {
    title: 'Customer testimonial',
    description:
      'Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus—in ornare.',
  };

  const testimonials = [
    {
      content:
        '-- Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.',
      name: 'Name',
    },
    {
      content:
        '-- Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.',
      name: 'Diana Rynzhuk ',
    },
    {
      content:
        '-- Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.',
      name: 'Ben Stafford',
    },
  ];

  return (
    <CustomerContainer>
      <SectionHeader title={sectionHeader.title} description={sectionHeader.description} />
      <Testimonials>
        {testimonials.map((tes, index) => (
          <TestimonialItem key={index} content={tes.content} name={tes.name} />
        ))}
      </Testimonials>
    </CustomerContainer>
  );
};

export default CustomerTestimonials;
